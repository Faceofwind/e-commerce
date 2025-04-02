import { Link } from 'react-router'

const AdminSidebar = () => {
  return (
    <div className='admin-sidebar'>
        <Link to='/admin/products'  id='sin'>products</Link>
        <Link to='/admin/users'  id='sin'>users</Link>
    </div>
  )
}

export default AdminSidebar