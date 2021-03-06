﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Slideshow.aspx.cs" Inherits="part2_Slideshow" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" type="text/css" href="../EricMeyerReset.css"/>
    <link rel="stylesheet" type="text/css" href="../main.css"/>
    <link rel="stylesheet" type="text/css" href="Slideshow.css"/>


    <title>PART 2: Slide Show</title>
</head>
<body>
    <form id="form1" runat="server">
        <h1 id="title">COMP 466: TMA 3A</h1>
        <ul id="navBar">
            <li><a href="../tma3a.htm">Home</a></li>
            <li><a href="../part1/CookieCounter.aspx">Part 1</a></li>
            <li><a id="active">Part 2</a></li>
            <li><a href="../part3/CompStore.aspx">Part 3</a></li>
            <li><a href="../part4/CompStore.aspx">Part 4</a></li>
        </ul>
        <div id="content">
            <h1 id="partTitle">Slideshow of Vancouver</h1>
            <div id="ctrls">
                <asp:ImageButton ID="ImagePrev" CssClass="aspImgCtrls" runat="server" ImageUrl="../images/part2/ctrls/prev.png" OnClick="ImagePrev_Click" />
                <asp:ImageButton ID="ImageShuffle" CssClass="aspImgCtrls" runat="server" ImageUrl="../images/part2/ctrls/shuffle.png" OnClick="ImageShuffle_Click" />
                <asp:ImageButton ID="ImagePlay" CssClass="aspImgCtrls" runat="server" ImageUrl="../images/part2/ctrls/play.png" OnClick="ImagePlay_Click" />
                <asp:ImageButton ID="ImageStop" CssClass="aspImgCtrls" runat="server" ImageUrl="../images/part2/ctrls/stop.png" OnClick="ImageStop_Click" />
                <asp:ImageButton ID="ImageNext" CssClass="aspImgCtrls" runat="server" ImageUrl="../images/part2/ctrls/next.png" OnClick="ImageNext_Click" />
            </div>
<%--            https://www.iconfinder.com/iconsets/freecns-cumulus--%>
<%--            http://ajax.net-tutorials.com/controls/timer-control/--%>
            <asp:ScriptManager runat="server"></asp:ScriptManager>
            <asp:UpdatePanel runat="server" style="text-align: center">
                <ContentTemplate>
                    <asp:Timer runat="server" ID="UpdateTimer" Interval="5000" OnTick="PhotoTick"></asp:Timer>
                    <asp:Image ID="ImageSlideshow" CssClass="aspImg" runat="server" ImageUrl="../images/part2/img1.jpg" />
                    <asp:Label runat="server" ID="LblCaption" Text="1. Stanley Part Totem Poles" CssClass="caption"></asp:Label>
<%--                    https://stackoverflow.com/questions/30204557/timer-not-incrementing-a-variable-in-timer-tick--%>
                    <asp:HiddenField ID="hdnShuffleOn" runat="server" Value="false"></asp:HiddenField>
                </ContentTemplate>
            </asp:UpdatePanel>
        </div>
    </form>
</body>
</html>
