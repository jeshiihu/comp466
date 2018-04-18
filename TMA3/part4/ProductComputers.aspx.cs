using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class part3_Products : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var loginCookie = Request.Cookies[Constants.LOGIN_COOKIE];
        var user = loginCookie?.Values[Constants.LOGIN_USER];
        var loggedIn = loginCookie != null && !string.IsNullOrEmpty(user);
        loginSignUp.Text = loggedIn ? $"{user}" : "LOG IN/SIGN UP";

        ConfigureComps();
        computerPanel.Update();
    }

    private void ConfigureComps()
    {
        if (ComputerList.FindControl("1") != null)
            return;

        var computers = Dal.GetAllComputers();
        foreach (var comp in computers)
        {
            var ctrl = new ImageButton();
            ctrl.ID = comp.Id.ToString();
            ctrl.ImageUrl = comp.ImgUrl;
            ctrl.Click += Comp_Click;
            ctrl.Style["display"] = "block";

            ComputerList.Controls.Add(ctrl);
            ScriptManager.GetCurrent(this).RegisterPostBackControl(ctrl);

            var lblctrl = new Label();
            lblctrl.Text = $"{comp.DisplayName} ({comp.Value})";
            ComputerList.Controls.Add(lblctrl);
        }
    }

    protected void Comp_Click(object sender, ImageClickEventArgs e)
        => SetComputerCookie(((ImageButton)sender).ID);

    private void SetComputerCookie(string val)
    {
        var cookie = Request.Cookies[Constants.COMPUTER_COOKIE] ?? CreateCookie();
        cookie.Values.Add(Constants.COMPUTER_NAME, val);
        Response.Cookies.Add(cookie);
        Server.Transfer("ProductItem.aspx", false);
    }

    private HttpCookie CreateCookie()
    {
        var cookie = new HttpCookie(Constants.COMPUTER_COOKIE);
        cookie.Values.Add(Constants.COMPUTER_NAME, "");
        cookie.Expires = DateTime.MaxValue;
        Response.Cookies.Add(cookie);
        return cookie;
    }
}