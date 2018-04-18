<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProductParts.aspx.cs" Inherits="part3_ProductParts" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>

    <title>Computer Parts</title>
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
                <h1 style="margin-bottom: 20px">Computer Parts</h1>
                <h3>Click on an item to add it to your cart!</h3>
                <ul class="products">
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/11.png" ID="item_11"/><br/>11 inch. Display ($105.05)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/13.png" ID="item_13"/><br/>13 inch. Display ($155.33)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/15.png" ID="item_15"/><br/>15 inch. Display ($205.99)</li>

                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/hdd256.png" ID="item_hdd256"/><br/>HDD 256GB ($43.95)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/hdd500.png" ID="item_hdd500"/><br/>HDD 500GB ($54.00)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/hdd750.png" ID="item_hdd750"/><br/>HDD 750GB ($62.99)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ssd128.png" ID="item_ssd128"/><br/>SSD 128GB ($72.75)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ssd256.png" ID="item_ssd256"/><br/>SSD 256GB ($103.32)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ssd500.png" ID="item_ssd500"/><br/>SSD 500GB ($183.99)</li>

                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ram4.png" ID="item_ram4"/><br/>RAM 4GB ($34.95)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ram8.png" ID="item_ram8"/><br/>RAM 8GB ($88.02)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ram16.png" ID="item_ram16"/><br/>RAM 16GB ($124.10)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ram32.png" ID="item_ram32"/><br/>RAM 32GB ($305.75)</li>

                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/i3.png" ID="item_i3"/><br/>Intel i3 ($110.99)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/i5.png" ID="item_i5"/><br/>Intel i5 ($188.25)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/i7.png" ID="item_i7"/><br/>Intel i7 ($263.97)</li>

                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/win7.png" ID="item_win7"/><br/>Windows 7 ($20.99)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/win10.png" ID="item_win10"/><br/>Windows 10 ($47.70)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/macsierra.png" ID="item_macsierra"/><br/>Mac High Sierra ($52.98)</li>
                    <li><asp:ImageButton CssClass="productPartItem" OnClick ="Item_Click" ToolTip="Add to Cart" runat="server" ImageUrl="../images/part3_4/ubuntu.png" ID="item_ubuntu"/><br/>Ubuntu 17.10 ($12.65)</li>
                </ul>
            </div>
        </div>
    </form>
</body>
</html>
