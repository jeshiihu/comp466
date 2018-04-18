using System;

/// <summary>
/// Summary description for Component
/// </summary>
public class Component
{
    public Constants.ComponentType ParentComponent;
    public string DisplayName;
    public double UnitPrice;
    public string Value => UnitPrice.ToString("C"); //currency
    public bool IsDefault;
    public string ImgUrl;
    public int Id;

    public Component(string url)
    {
        ImgUrl = url;
    }

    public Component(Constants.ComponentType parent, string display, double price, bool isDefault, string url = "", int id = -1)
    {
        ParentComponent = parent;
        DisplayName = display;
        UnitPrice = price;
        IsDefault = isDefault;
        ImgUrl = url;
        Id = id;
    }
}