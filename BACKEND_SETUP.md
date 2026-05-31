# 后台数据同步设置指南（可选）

> **说明：** 不做此设置，网站询价功能也能正常工作。
> 询价单会保存在您电脑浏览器中，您可以在 `admin.html` 中查看并导出 Excel。
>
> 如果希望**跨设备访问**（客户在全球提交，您在任意设备看到数据），
> 请按以下步骤配置 Google Sheets 免费后台。

---

## 步骤一：创建 Google 表格

1. 打开 [Google Sheets](https://sheets.google.com)，新建一个表格
2. 命名为 `CM询价单`
3. 在第一行手动输入这些表头（A1 到 K1）：
   ```
   提交时间 | 询价编号 | 客户名称 | 国家 | WhatsApp | 微信 | 邮箱 | 商品数量(种) | 状态 | 备注 | 商品明细(JSON)
   ```
4. 复制浏览器地址栏中表格 URL 里的 ID（两个 `/d/` 和 `/edit` 之间的一串字母数字）

---

## 步骤二：创建 Google Apps Script

1. 在刚才的 Google 表格中，点击菜单：**扩展程序 → Apps Script**
2. 删除默认代码，粘贴以下代码：

```javascript
const SHEET_ID = '在这里粘贴你的表格ID';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    const itemsSummary = (data.items || []).map(i => `${i.size}×${i.qty}pcs`).join('; ');
    const itemsJson    = JSON.stringify(data.items || []);
    
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.id          || '',
      data.name        || '',
      data.country     || '',
      data.whatsapp    || '',
      data.wechat      || '',
      data.email       || '',
      (data.items || []).length,
      'New',
      data.notes       || '',
      itemsJson
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. 点击 **保存**（Ctrl+S），项目名称填 `CM询价接收`

---

## 步骤三：部署为 Web App

1. 点击右上角 **部署 → 新建部署**
2. 选择类型：**网络应用**
3. 配置：
   - 执行身份：**我（您的 Google 账号）**
   - 具有访问权限的用户：**任何人（包括匿名用户）**
4. 点击 **部署**，复制生成的 **网络应用 URL**

---

## 步骤四：将 URL 填入网站

打开 `js/cart.js` 文件，找到第 10 行：
```javascript
const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
将 `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` 替换为刚才复制的 URL，保存文件。

---

## 管理后台说明

- **访问地址：** `您的网站域名/admin.html`
- **默认密码：** `cm2024admin`（在 `admin.html` 第 214 行修改）
- **功能：**
  - 查看所有询价单
  - 搜索/筛选
  - 标记处理状态（New / Contacted / Quoted / Closed）
  - 一键导出 Excel（含"汇总表"和"商品明细表"两个 Sheet）

---

## 常见问题

**Q: 不配置 Google Apps Script 能用吗？**  
A: 可以，询价数据保存在当前浏览器，admin.html 可查看和导出 Excel。

**Q: 客户数据安全吗？**  
A: 数据存在您的 Google 账号下的 Sheets 中，只有您能访问。

**Q: 每月免费限额是多少？**  
A: Google Apps Script 每天可执行 6 分钟，对于 B2B 询价量完全够用（每次提交约 1 秒）。
