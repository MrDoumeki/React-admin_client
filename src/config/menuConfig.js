

const menuList = [
    {
        title:'首页',
        key:'/admin/home',
        icon:'HomeOutlined'
    },
    {
        title:'商品',
        key:'/admin/products',
        icon:'<WalletOutlined />',
        children:[
            {
                title:'商品管理',
                key:'/admin/product',
                icon:'<AccountBookOutlined />'
            }
        ]
    },
    {
        title:'分类管理',
        key:'/admin/category',
        icon:'<FolderOpenOutlined />'
    },
    {
        title:'角色管理',
        key:'/admin/role',
        icon:'<UserOutlined />'
    },
    {
        title:'图片展示',
        key:'/admin/charts',
        icon:'<AreaChartOutlined />',
        children:[
            {
                title:'饼图',
                key:'/admin/pie',
                icon:'<PieChartOutlined />'
            },
            {
                title:'折线图',
                key:'/admin/line',
                icon:'<LineChartOutlined />'
            },
            {
                title:'条形图',
                key:'/admin/bar',
                icon:'<BarChartOutlined />'
            }
        ]
    },
    {
        title:'用户管理',
        key:'/admin/user',
        icon:'<UsergroupAddOutlined />'
    },
]

export default menuList
