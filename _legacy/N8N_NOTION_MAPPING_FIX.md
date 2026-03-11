# Fixing Notion Node Field Mapping in n8n

## The Problem

The error shows that n8n is sending the wrong data format to Notion. The issue is with how you're mapping the fields.

## The Solution

You need to map fields differently based on their **property type** in Notion.

### Step-by-Step Fix:

1. **In n8n**, click on your **Notion node**
2. For each field, you need to match the **exact property type** from your Notion database

---

## Correct Field Mappings:

### For **Name** (Title property):
- **Key Name or ID:** `Name`
- **Type:** Select `Title` from dropdown
- **Title:** `{{ $json.body.name }}`

### For **Email** (Email property):
- **Key Name or ID:** `Email`
- **Type:** Select `Email` from dropdown
- **Email:** `{{ $json.body.email }}`

### For **Age** (Number property):
- **Key Name or ID:** `Age`
- **Type:** Select `Number` from dropdown
- **Number:** `{{ Number($json.body.age) }}`
  - **IMPORTANT:** Use `Number()` to convert the string to a number!
  - The form sends age as a string, so we must convert it

### For **Location** (Rich Text property):
- **Key Name or ID:** `Location`
- **Type:** Select `Rich Text` from dropdown
- **Rich Text:** Click "Add Rich Text" then:
  - **Type:** Select `Text` from dropdown
  - **Text:** `{{ $json.body.location }}`

### For **Instagram** (Rich Text property):
- **Key Name or ID:** `Instagram`
- **Type:** Select `Rich Text` from dropdown
- **Rich Text:** Click "Add Rich Text" then:
  - **Type:** Select `Text` from dropdown
  - **Text:** `{{ $json.body.instagram }}`

### For **Social** (Rich Text property):
- **Key Name or ID:** `Social`
- **Type:** Select `Rich Text` from dropdown
- **Rich Text:** Click "Add Rich Text" then:
  - **Type:** Select `Text` from dropdown
  - **Text:** `{{ $json.body.social }}`

### For **Photos** (URL property):
- **Key Name or ID:** `Photos`
- **Type:** Select `URL` from dropdown
- **URL:** `{{ $json.body.photos }}`

### For **Why** (Rich Text property):
- **Key Name or ID:** `Why`
- **Type:** Select `Rich Text` from dropdown
- **Rich Text:** Click "Add Rich Text" then:
  - **Type:** Select `Text` from dropdown
  - **Text:** `{{ $json.body.why }}`

### For **Submitted** (Date property):
- **Key Name or ID:** `Submitted`
- **Type:** Select `Date` from dropdown
- **Date:** `{{ $now.toISO() }}`
  - This will automatically set the current date/time when the form is submitted

---

## Key Points:

1. **Each property must match its type in Notion**
   - If it's a Number in Notion → use Number type in n8n
   - If it's Rich Text in Notion → use Rich Text type in n8n
   - If it's Email in Notion → use Email type in n8n

2. **The dropdown matters!**
   - When you add a property, there's a dropdown to select the type
   - Make sure you select the correct type for each field

3. **Check your Notion database**
   - Go to your Notion database
   - Click the "..." menu → "Properties"
   - Verify what type each property is
   - Match those types exactly in n8n

---

## Common Mistakes:

❌ **Wrong:** Setting Age as "Rich Text" 
✅ **Right:** Setting Age as "Number"

❌ **Wrong:** Not selecting a type from the dropdown
✅ **Right:** Always select the matching type

---

## After Fixing:

1. **Save** your workflow
2. **Test** the form again
3. Check your Notion database for the entry

The error should be gone and data will flow perfectly!
