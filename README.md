# Hudson CRM - Phase 1: Layout & Styling Foundation

A beautiful static demo page for Hudson, an AI-powered CRM for medical practices (ENT focus).

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (v4)
- **Lucide React** icons
- **Framer Motion** for animations
- **Inter** font from Google Fonts

## Design System

### Typography
- Font: Inter (weights: 300-800)
- System: 4px grid - all spacing uses multiples of 4px

### Colors
```
Hudson Primary: #5538DE
Gray Background: #F9FAFB
Gray Border: #E5E6EA
Text Color: #030000
```

### Layout Structure
- **Left Sidebar**: 280px fixed width
- **Center Column**: 600px fixed width
- **Right Sidebar**: Flexible width (fills remaining space)
- **Dividers**: 1px solid #E5E6EA

## Features

### Left Sidebar
- Hudson logo with purple branding
- Search and "New Message" action buttons
- Patient list with 18 realistic ENT patients
- Status indicators:
  - Blue dots for unread messages
  - Red pulsing dots for urgent messages (Framer Motion)
  - Gold stars for VIP patients
- Active patient highlighting

### Center Column
- Patient header with demographics and last visit date
- iMessage-style message thread:
  - Outgoing messages (staff): Purple background, right-aligned
  - Incoming messages (patient): Light gray background, left-aligned
  - Avatar badges and timestamps
- Message composer with send button

### Right Sidebar
- Patient information card with avatar
- Contact details (phone, email)
- Context & Notes section
- Upcoming Appointments with status badges
- Medical Summary (diagnosis, tests, treatment plan)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Project Structure

```
/app
  /page.tsx          # Main three-column layout
  /layout.tsx        # Root layout with Inter font
  /globals.css       # Tailwind config & custom colors

/components
  /LeftSidebar.tsx   # Patient list sidebar
  /CenterColumn.tsx  # Message thread view
  /RightSidebar.tsx  # Patient details & appointments
  /MessageBubble.tsx # Reusable message component

/lib
  /utils.ts          # cn helper for className merging
```

## Design Notes

- **Static Only**: No interactivity in Phase 1 - pure visual design
- **Desktop First**: Optimized for 1440px+ screens
- **Realistic Data**: ENT medical office scenarios with authentic patient conversations
- **Professional Polish**: Shadows, borders, spacing, typography carefully tuned

## What's Next

Future phases will add:
- Click interactions and state management
- Real-time messaging functionality
- Patient data management
- AI-powered features
- Responsive design for mobile/tablet

---

Built with ❤️ using Next.js and Tailwind CSS
