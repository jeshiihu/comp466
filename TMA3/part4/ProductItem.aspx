<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProductItem.aspx.cs" Inherits="part3_ProductItem" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>

    <title>Product Item</title>
</head>
<body>
    <form id="form1" runat="server">
        <h1 id="title">COMP 466: TMA 3A</h1>
        <ul id="navBar">
            <li><a href="../tma3a.htm">Home</a></li>
            <li><a href="../part1/CookieCounter.aspx">Part 1</a></li>
            <li><a href="../part2/Slideshow.aspx">Part 2</a></li>
            <li><a href="../part3/CompStore.aspx">Part 3</a></li>
            <li><a id="active">Part 4</a></li>
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
                <div>
                    <div style="display: inline-block">
                        <h1>Product</h1>
                    </div>
                    <div style="display: inline-block">
                        <asp:Label runat="server" ID="compLbl" Font-Size="30px"></asp:Label>
                    </div>
                    <div style="display: block">
                        <asp:Button runat="server" Text="ADD TO CART" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnAddToCart" OnClick="btnAddToCart_Click"/>
                        <asp:Label runat="server" ID="totalPrice" Font-Size="30px"></asp:Label>
                    </div>
                </div>
                <br/>
                <asp:Label runat="server" ID="err" CssClass="error"></asp:Label>
                <asp:Image ID="compImg" runat="server"/>
                <table>
                    <tr>
                        <td>Display:</td>
                        <td><asp:DropDownList runat="server" id="optDisplay" OnSelectedIndexChanged="CalculateTotal" AutoPostBack="True"/></td>
                    </tr>
                    <tr>
                        <td>Drive:</td>
                        <td><asp:DropDownList runat="server" id="optDrive" OnSelectedIndexChanged="CalculateTotal" AutoPostBack="True"/></td>
                    </tr>
                    <tr>
                        <td>RAM:</td>
                        <td><asp:DropDownList runat="server" id="optRam" OnSelectedIndexChanged="CalculateTotal" AutoPostBack="True"/></td>
                    </tr>
                    <tr>
                        <td>CPU:</td>
                        <td><asp:DropDownList runat="server" id="optCpu" OnSelectedIndexChanged="CalculateTotal" AutoPostBack="True"/></td>
                    </tr>
                    <tr>
                        <td>OS:</td>
                        <td><asp:DropDownList runat="server" id="optOs" OnSelectedIndexChanged="CalculateTotal" AutoPostBack="True"/></td>
                    </tr>
                </table>
                <br/><br/><br/>
            </div>
        </div>
    </form>
</body>
</html>
