import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }) {
  return (
    <html lang="fr">
        <aside className="documentationNav">
            <SideNav />
        </aside>
        {children}
    </html>
  );
}