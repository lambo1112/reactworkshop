const DropdownComponent = ()=>{
    return(
        <nav>
            <h2>Dynamic Dropdown</h2>
            <select className="menu">
                <option value="all">เมนูทั้งหมด</option>
                <option value="fried">ผัด-ทอด</option>
                <option value="curry">แกง-ต้มยำ</option>
                <option value="drink">เครื่องดื่ม (ชา กาแฟ นม)</option>
                <option value="steak">สเต็ก</option>
            </select>
        </nav>
    )
}

export default DropdownComponent;