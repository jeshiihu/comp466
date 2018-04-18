<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Feedback.aspx.cs" Inherits="part3_Feedback" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>

    <title>Feedback</title>
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
                <h1 style="margin-bottom: 20px">Feedback Form</h1>
                <p>Please fill out the form fully and click Submit.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h3>Name:</h3><asp:Label runat="server" CssClass="error" id="errName"></asp:Label>
                <asp:TextBox id="tbxName" runat="server" MaxLength="50" placeholder="your name" Width="335px" OnTextChanged="tbxName_TextChanged"></asp:TextBox>
                <br />
                <br />
                <h3>Email:</h3><asp:Label runat="server" CssClass="error" id="errEmail"></asp:Label>
                <asp:TextBox ID="tbxEmail" runat="server" MaxLength="50" placeholder="your email" Width="335px" OnTextChanged="tbxEmail_TextChanged"></asp:TextBox>
                <br />
                <br />
                <h3>Subject Line:</h3><asp:Label runat="server" CssClass="error" id="errSubject"></asp:Label>
                <asp:TextBox ID="tbxSubject" runat="server" MaxLength="100" placeholder="short subject line" Width="474px" OnTextChanged="tbxSubject_TextChanged"></asp:TextBox>
                <br /><br />
                <h3>Details:</h3><asp:Label runat="server" CssClass="error" id="errDetails"></asp:Label>
                <asp:TextBox ID="tbxDetails" runat="server" placeholder="Write your comments, issues, and concerns here." Height="191px" TextMode="MultiLine" Width="964px" OnTextChanged="tbxDetails_TextChanged"></asp:TextBox>
                <br /><br />
                <asp:Label runat="server" CssClass="error" id="errSubmit"></asp:Label>
                <asp:Button style="margin-bottom: 30px" runat="server" Text="SUBMIT FORM" ID="btnSubmit" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" OnClick="btnSubmit_Click"/>
            </div>
        </div>
    </form>
</body>
</html>
