<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProductComputers.aspx.cs" Inherits="part3_Products" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>

    <title>Computer Products</title>
</head>
<body>
    <form id="form1" runat="server">
        <h1 id="title">COMP 466: TMA 3A</h1>
        <ul id="navBar">
            <li><a href="../tma3a.htm">Home</a></li>
            <li><a href="../part1/CookieCounter.aspx">Part 1</a></li>
            <li><a href="../part2/Slideshow.aspx">Part 2</a></li>
            <li><a id="active">Part 3</a></li>
            <li><a href="../part4/part4.html">Part 4</a></li>
        </ul>
        <div id="content">
            <div id="computerNav">
                <asp:Button runat="server" ID="loginSignUp" PostBackUrl="LoginPage.aspx" CssClass="loginSignup" Text="LOG IN/SIGN UP" BackColor="WhiteSmoke" BorderColor="WhiteSmoke" BorderStyle="None" ForeColor="#006699"/>
    <%--            https://www.iconfinder.com/icons/85774/cart_shopping_icon--%>
                <asp:ImageButton runat="server" ID="shoppingCart" ImageUrl="../images/if_shopping-cart_85774.png" CssClass="shoppingCart" PostBackUrl="Cart.aspx"/>

    <%--            https://www.iconfinder.com/icons/406819/computer_icon--%>
                <asp:Image runat="server" ID="part3Logo" CssClass="partLogo" ImageUrl="../images/if_computer_406819.png"/>
                <asp:Menu ID="NavigationMenu" CssClass="menu"
                          Orientation="Horizontal" runat="server">
                    <Items>
                        <asp:MenuItem NavigateUrl="CompStore.aspx" Text="<span class=&quot;menuitem_text&quot;>HOME</span>"/>
                        <asp:MenuItem Text="<span class=&quot;menuitem_text&quot;>PRODUCTS</span>" Selectable="False">
                            <asp:MenuItem NavigateUrl="ProductComputers.aspx" Text="<span class=&quot;submenuitem_text&quot;>COMPUTERS</span>"></asp:MenuItem>
                            <asp:MenuItem NavigateUrl="ProductParts.aspx" Text="<span class=&quot;submenuitem_text&quot;>COMPUTER PARTS</span>"></asp:MenuItem>
                        </asp:MenuItem>
                        <asp:MenuItem NavigateUrl="Contact.aspx" Text="<span class=&quot;menuitem_text&quot;>CONTACT</span>"/>
                        <asp:MenuItem NavigateUrl="Feedback.aspx" Text="<span class=&quot;menuitem_text&quot;>FEEDBACK</span>"/>
                    </Items>
                </asp:Menu>
            </div>
            <div id="computerContent">
                <h1 style="margin-bottom: 20px">Computers</h1>
                <h3>Click on a computer to configure it!</h3>
                <ul class="products">
    <%--                https://www.iconfinder.com/icons/18287/computer_laptop_pc_icon#size=256--%>
    <%--                https://www.iconfinder.com/icons/62112/computer_laptop_notebook_icon#size=256--%>
    <%--                https://www.iconfinder.com/icons/53262/apple_computer_laptop_mac_macbook_pro_icon#size=256--%>
                    <li><asp:ImageButton CssClass="productItem" runat="server" ImageUrl="../images/part3_4/macbook.png" ID="btnMacbook" OnClick="btnMacbook_Click"/><br/>Macbook Pro</li>
                    <li><asp:ImageButton CssClass="productItem" runat="server" ImageUrl="../images/part3_4/lenovo.png" ID="btnLenovo" OnClick="btnLenovo_Click"/><br/>Lenovo</li>
                    <li><asp:ImageButton CssClass="productItem" runat="server" ImageUrl="../images/part3_4/hp.png" ID="btnHp" OnClick="btnHp_Click"/><br/>HP Notebook</li>
                </ul>
            </div>
        </div>
    </form>
</body>
</html>
