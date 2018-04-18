using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class part3_ProductParts : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var loginCookie = Request.Cookies[Constants.LOGIN_COOKIE];
        var user = loginCookie?.Values[Constants.LOGIN_USER];
        var loggedIn = loginCookie != null && !string.IsNullOrEmpty(user);
        loginSignUp.Text = loggedIn ? $"{user}" : "LOG IN/SIGN UP";
    }

    protected void Item_Click(object sender, ImageClickEventArgs e)
    {
        var id = ((ImageButton)sender).ID;
        Component comp;
        switch (id)
        {
            case "item_11":
                comp = new Component(Constants.ComponentType.Display, "11 inch.", 100.05, false);
                break;
            case "item_13":
                comp = new Component(Constants.ComponentType.Display, "13 inch.", 150.33, false);
                break;
            case "item_15":
                comp = new Component(Constants.ComponentType.Display, "15 inch.", 200.99, false);
                break;
            case "item_hdd256":
                comp = new Component(Constants.ComponentType.Drive, "HDD 256", 39.95, false);
                break;
            case "item_hdd500":
                comp = new Component(Constants.ComponentType.Drive, "HDD 500", 50.00, false);
                break;
            case "item_hdd750":
                comp = new Component(Constants.ComponentType.Drive, "HDD 750", 58.99, false);
                break;
            case "item_ssd128":
                comp = new Component(Constants.ComponentType.Drive, "SSD 128", 68.75, false);
                break;
            case "item_ssd256":
                comp = new Component(Constants.ComponentType.Drive, "SSD 256", 109.32, false);
                break;
            case "item_ssd500":
                comp = new Component(Constants.ComponentType.Drive, "SSD 500", 179.99, false);
                break;
            case "item_ram4":
                comp = new Component(Constants.ComponentType.Ram, "RAM 4GB", 29.95, false);
                break;
            case "item_ram8":
                comp = new Component(Constants.ComponentType.Ram, "RAM 8GB", 83.02, false);
                break;
            case "item_ram16":
                comp = new Component(Constants.ComponentType.Ram, "RAM 16GB", 129.10, false);
                break;
            case "item_ram32":
                comp = new Component(Constants.ComponentType.Ram, "RAM 32GB", 300.75, false);
                break;
            case "item_i3":
                comp = new Component(Constants.ComponentType.Cpu, "Intel i3",101.99, false);
                break;
            case "item_i5":
                comp = new Component(Constants.ComponentType.Cpu, "Intel i5", 179.25, false);
                break;
            case "item_i7":
                comp = new Component(Constants.ComponentType.Cpu, "Intel i7", 253.97, false);
                break;
            case "item_win7":
                comp = new Component(Constants.ComponentType.Os, "Windows 7", 18.99, false);
                break;
            case "item_win10":
                comp = new Component(Constants.ComponentType.Os, "Windows 10", 45.79, false);
                break;
            case "item_macsierra":
                comp = new Component(Constants.ComponentType.Os, "Mac High Sierra", 50.98, false);
                break;
            case "item_ubuntu":
                comp = new Component(Constants.ComponentType.Os, "Ubuntu 17.10", 10.65, false);
                break;
            default:
                comp = null;
                break;
        }

        var cartItem = new CartItem(comp, new List<Component>());
        AddCartItem(cartItem);
    }

    private void AddCartItem(CartItem item)
    {
        var cookie = Request.Cookies[Constants.CART_COOKIE];
        var cartItems = cookie?.Values[Constants.CART_ITEMS];
        if (cartItems == null)
        {
            cookie = new HttpCookie(Constants.CART_COOKIE);
            cookie.Values.Add(Constants.CART_ITEMS, item.Id.ToString());
            cookie.Expires = DateTime.MaxValue;
            Response.Cookies.Add(cookie);
        }
        else
            cookie.Values.Add(Constants.CART_ITEMS, item.Id.ToString());

        Constants.CartItems.Add(item);
        Server.Transfer("Cart.aspx", false);
    }

}