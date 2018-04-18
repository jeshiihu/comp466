<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CompStore.aspx.cs" Inherits="part3_CompStore" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>

    <title>Part 3: Computer Store 1.0</title>
</head>
<body>
    <form id="form1" runat="server">
        <h1 id="title">COMP 466: TMA 3A</h1>
        <ul id="navBar">
            <li><a href="../tma3a.htm">Home</a></li>
            <li><a href="../part1/CookieCounter.aspx">Part 1</a></li>
            <li><a href="../part2/Slideshow.aspx">Part 2</a></li>
            <li><a id="active">Part 3</a></li>
            <li><a href="../part4/CompStore.aspx">Part 4</a></li>
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
            <div id="computerContent" style="text-align: center">
                <h2>Welcome TO ComputOS! Where you can find all of your laptop building needs</h2>
                <asp:Image runat="server" ImageUrl="../images/comp.png" ImageAlign="Middle" CssClass="compBanner"/>
            </div>
        </div>
    </form>
</body>
</html>
