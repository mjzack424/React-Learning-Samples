export default function Layout({ children, info, skills }) {
    const AdminAuth = () => {
        return false
    }
    const isAdmin = AdminAuth();
  return (
    <div className="container" style={{ textAlign: "center" }}>
      {children}
      {isAdmin && info}
      {skills}
    </div>
  );
}

