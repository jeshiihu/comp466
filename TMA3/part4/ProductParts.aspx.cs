using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class part3_ProductParts : System.Web.UI.Page
{
    private string User;
    private bool IsUserLoggedIn => User != "LOG IN/SIGN UP";

    protected void Page_Load(object sender, EventArgs e)
    {
        var loginCookie = Request.Cookies[Constants.LOGIN_COOKIE];
        var user = loginCookie?.Values[Constants.LOGIN_USER];
        var loggedIn = loginCookie != null && !string.IsNullOrEmpty(user);
        loginSignUp.Text = loggedIn ? $"{user}" : "LOG IN/SIGN UP";
        User = loginSignUp.Text;

        UpdateGui();
        partPanel.Update();
    }

    private void UpdateGui()
    {
        if (partsList.FindControl("1") != null)
            return;

        var comps = Dal.GetAllComponents();
        foreach (var comp in comps)
        {
            var ctrl = new ImageButton
            {
                ID = comp.Id.ToString(),
                ImageUrl = comp.ImgUrl,
            };
            ctrl.Style["width"] = "256px";
            ctrl.Style["height"] = "256px";
            ctrl.Click += Comp_Click;
            ctrl.Style["display"] = "block";

            partsList.Controls.Add(ctrl);
            ScriptManager.GetCurrent(this).RegisterPostBackControl(ctrl);

            var lblctrl = new Label();
            lblctrl.Text = $"{comp.DisplayName} ({comp.Value})";
            partsList.Controls.Add(lblctrl);
        }
    }

    private void Comp_Click(object sender, ImageClickEventArgs e)
    {
        var comp = Dal.GetComponent(Int32.Parse(((ImageButton) sender).ID));
        var cartItem = new CartItem(comp, new List<Component>());
        AddCartItem(cartItem);
    }

    private void AddCartItem(CartItem item)
    {
        err.Text = IsUserLoggedIn ? "" : "PLEASE LOG IN TO ADD TO CART";
        partPanel.Update();

        if (IsUserLoggedIn)
        {
            item.TableRowId = Dal.AddCartItemToOrder(item, User);
            Constants.Part4CartItems.Add(item);
            partPanel.Update();

            Server.Transfer("Cart.aspx", false);
        }
    }
}