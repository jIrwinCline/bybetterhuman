# Fixing CORS Issue in n8n Webhook

## The Problem

Your form is getting blocked by CORS (Cross-Origin Resource Sharing) because n8n webhooks don't automatically allow requests from web pages.

## The Solution

You need to enable CORS in your n8n webhook settings.

### Option 1: Add CORS Headers in Webhook Response (Easiest)

1. **In your n8n workflow**, click on the **Webhook node**
2. Scroll down to **"Options"** section
3. Click **"Add Option"**
4. Select **"Response Headers"**
5. Add these headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

To add each header:
- Click "+ Add Header"
- Name: `Access-Control-Allow-Origin`, Value: `*`
- Click "+ Add Header"
- Name: `Access-Control-Allow-Methods`, Value: `POST, OPTIONS`
- Click "+ Add Header"
- Name: `Access-Control-Allow-Headers`, Value: `Content-Type`

6. **Save** the workflow
7. **Test the form again**

### Option 2: Use n8n's Built-in CORS Setting (If Available)

Some n8n versions have a CORS toggle:

1. In the Webhook node settings
2. Look for **"Allow CORS"** or **"Enable CORS"** option
3. Toggle it **ON**
4. Save and test

### Option 3: Add a Response Node (Advanced)

If the above doesn't work:

1. Add a **"Respond to Webhook"** node after your Notion node
2. Set Response Code: `200`
3. Add the CORS headers there
4. This gives you more control over the response

---

## After Fixing CORS:

1. **Save your workflow**
2. Make sure it's **Active** (green toggle)
3. **Refresh your form page**
4. **Submit a test application**
5. **Check your Notion database** for the entry

---

## Still Having Issues?

If CORS persists, you have two backup options:

### Backup Option A: Use n8n Form Node Instead

n8n has a built-in Form node that handles CORS automatically:
- Replace Webhook with Form node
- It creates a hosted form page
- No CORS issues

### Backup Option B: Simple Proxy

Create a tiny serverless function that forwards requests to n8n (I can help with this).

---

**Try Option 1 first - it should solve the CORS issue!**
