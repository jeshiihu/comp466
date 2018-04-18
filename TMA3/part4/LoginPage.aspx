<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LoginPage.aspx.cs" Inherits="part3_LoginPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="CompStore.css"/>
    <link rel="stylesheet" type="text/css" href="Login.css"/>

    <title>Login Page</title>
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
        <asp:ScriptManager runat="server"></asp:ScriptManager>
        <asp:UpdatePanel ID="loginUpdate" runat="server" UpdateMode="Conditional">
            <ContentTemplate>
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
                <h1 style="margin-bottom: 20px">Log In</h1>
                <div id="login">
                    <h3>Returning Customer?</h3>
                    <p>Please log into your account</p>
                    <br/><br/>
                    <p>Email: </p>
                    <asp:Label runat="server" CssClass="error" ID="errUser"></asp:Label>
                    <asp:TextBox runat="server" ID="tbxUser"></asp:TextBox>
                    <p>Password: </p>
                    <asp:Label runat="server" CssClass="error" ID="errPw"></asp:Label>
                    <asp:TextBox runat="server" ID="tbxPw" TextMode="Password"></asp:TextBox>
                    <br/><br/>
                    <asp:Button runat="server" Text="LOG IN" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnLogin" OnClick="btnLogin_Click"/>
                    <asp:Label runat="server" CssClass="error" ID="errLogin"></asp:Label>
                </div>
                <div id="createAccount">
                    <h3>Don't have an account?</h3>
                    <p>The benefits of having an account are to keep track of orders, carts, and save your information for ease of purchase!</p>
                    <br/><br/>
                    <p>Email: </p>
                    <asp:Label runat="server" CssClass="error" ID="errUserCreate"></asp:Label>
                    <asp:TextBox runat="server" ID="tbxUserCreate"></asp:TextBox>
                    <p>Password: </p>
                    <asp:Label runat="server" CssClass="error" ID="errPwCreate"></asp:Label>
                    <asp:TextBox runat="server" ID="tbxPwCreate" TextMode="Password"></asp:TextBox>
                    <br/><br/>
                    <asp:Button runat="server" Text="CREATE ACCOUNT" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnCreateAccount" OnClick="btnCreateAccount_Click"/>
                    <asp:Label runat="server" CssClass="error" ID="errCreate"></asp:Label>
                </div>
                <asp:Button runat="server" Text="LOG OUT" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnLogout" CssClass="btnLogout" OnClick="btnLogout_Click"/>
                <div id="pwRecovery">
                    <asp:Button runat="server" Text="PASSWORD RECOVERY" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnPwRecovery" OnClick="btnPwRecovery_Click"/>
                    <asp:Label ID="lblNewPw" runat="server" Text="New Password"></asp:Label>
                    <asp:TextBox ID="tbxNewPw" runat="server" TextMode="Password"></asp:TextBox>
                    <asp:Button runat="server" Text="SAVE NEW PASSWORD" BackColor="#006699" BorderColor="#006699" BorderStyle="Solid" ForeColor="White" ID="btnSaveNewPw" OnClick="btnSaveNewPw_Click"/>
                    <asp:Label runat="server" CssClass="error" ID="errNwPw"></asp:Label>
                </div>
            </div>
        </div>
        </ContentTemplate>
        </asp:UpdatePanel>
    </form>
</body>
</html>
