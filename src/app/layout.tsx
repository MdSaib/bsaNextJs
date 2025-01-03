import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/forgot-password">Forgot Passwor</Link>
            </li>
            <li>
              <Link href="/dashboard">Officer Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link href="/file/create">Create File</Link>
            </li>
            <li>
              <Link href="/file/123">File Details</Link>
            </li>
            <li>
              <Link href="/file/123/workflow-edit">Edit Workflow</Link>
            </li>
            <li>
              <Link href="/public/status">File Status Check</Link>
            </li>
            <li>
              <Link href="/admin/users">User Management</Link>
            </li>
            <li>
              <Link href="/admin/add-user">Add User</Link>
            </li>
            <li>
              <Link href="/admin/analytics">Analytics</Link>
            </li>
            <li>
              <Link href="/admin/reports">Export Reports</Link>
            </li>
            <li>
              <Link href="/settings/system">System Settings</Link>
            </li>
            <li>
              <Link href="/settings/profile">Profile Settings</Link>
            </li>
            <li>
              <Link href="/notifications">Notifications</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
