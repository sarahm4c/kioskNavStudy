require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Categories":[function(require,module,exports){
var Categories;

Categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "bagelICO",
    subcats: ["Egg Sandwiches", "Baked Eggs", "Oatmeal", "Bagels & Spreads", "Coffee & Tea"]
  }, {
    id: "lunchDinner",
    name: "Lunch & Dinner",
    icon: "sandwichICO",
    subcats: ["Sandwiches", "Salads", "Soups", "Bowls"]
  }, {
    id: "kids",
    name: "Kids",
    icon: "kidsICO",
    subcats: ["Soup & Pasta", "Sandwiches", "PANDAS", "Monkeys"]
  }, {
    id: "bakery",
    name: "Bakery",
    icon: "croissantICO",
    subcats: ["Sweets", "Bagels", "Pandas"]
  }, {
    id: "beverages",
    name: "Beverages",
    icon: "coffeeICO",
    subcats: ["Coffee & Tea", "Iced Tea & Lemonade", "Smoothies", "Bottled Stuff"]
  }
];


},{}],"Styleguide":[function(require,module,exports){

/* Colors */
var H1, black, blue, clear, disabledTxt, dkGreen, dkGreyTxt, ltGreyBg, ltGreyTxt, medGreen, nav1, nav1ON, spacer, subnav, subnavON, white,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

white = new Color("#FFF");

black = new Color("#000");

blue = new Color("#02CCD0");

spacer = new Color("rgba(2,204,208,.3)");

medGreen = new Color("#6B9F62");

dkGreen = new Color("#4C753F");

dkGreyTxt = new Color("#35383D");

ltGreyTxt = new Color("#6F6F75");

disabledTxt = new Color("#949499");

ltGreyBg = new Color("#F1F1F1");

clear = "rgba(255,255,255,0)";


/* Type Styles */

H1 = {
  font: "600 40px/1.1 Archer-Semibold",
  textAlign: "center",
  color: dkGreyTxt,
  letterSpacing: -0.89,
  padding: {
    top: -4,
    bottom: -4
  }
};

nav1 = {
  fontSize: 20,
  textAlign: "left",
  letterSpacing: .2,
  lineHeight: 1.2,
  textTransform: "uppercase",
  padding: {
    top: -4,
    bottom: -4
  },
  fontFamily: "Calibre-Regular",
  color: ltGreyTxt
};

nav1ON = {
  fontFamily: "Calibre-Medium",
  color: dkGreyTxt
};

subnav = {
  fontSize: 20,
  textAlign: "justify",
  letterSpacing: 0,
  lineHeight: 1,
  padding: {
    top: -4,
    bottom: -4,
    right: 30,
    left: 30
  },
  fontFamily: "Calibre-Regular",
  color: ltGreyTxt
};

subnavON = {
  fontFamily: "Calibre-Medium",
  color: dkGreyTxt
};


/* Navigation */

exports.subCats = (function(superClass) {
  extend(subCats, superClass);

  function subCats(options) {
    var base, base1, base2, base3;
    this.options = options != null ? options : {};
    this.options.fontSize = subnav.fontSize;
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = subnav.fontFamily;
    }
    this.options.textAlign = "center";
    this.options.letterSpacing = subnav.letterSpacing;
    this.options.lineHeight = subnav.lineHeight;
    if ((base1 = this.options).color == null) {
      base1.color = subnav.color;
    }
    if ((base2 = this.options).text == null) {
      base2.text = "Subnav button!";
    }
    if ((base3 = this.options).active == null) {
      base3.active = false;
    }
    if (this.options.active === true) {
      this.options.fontFamily = subnavON.fontFamily;
      this.options.color = subnavON.color;
    }
    _.defaults(this.options, {
      backgroundColor: null,
      height: 74
    });
    this.label = new TextLayer({
      text: this.options.text,
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      color: this.options.color,
      textAlign: this.options.textAlign,
      name: "label",
      backgroundColor: null
    });
    subCats.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    this.label.y = Align.center;
    this.label.x = 20;
    this.width = this.label.width + 40;
  }

  subCats.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      this.options.active = value;
      if (this.options.active === true) {
        this.label.fontFamily = subnavON.fontFamily;
        return this.label.color = subnavON.color;
      } else {
        this.label.fontFamily = subnav.fontFamily;
        return this.label.color = subnav.color;
      }
    }
  });

  return subCats;

})(Layer);

exports.navButt = (function(superClass) {
  extend(navButt, superClass);

  function navButt(options) {
    var base, base1, base2, base3;
    this.options = options != null ? options : {};
    this.options.fontSize = nav1.fontSize;
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = nav1.fontFamily;
    }
    if ((base1 = this.options).color == null) {
      base1.color = nav1.color;
    }
    this.options.textAlign = nav1.textAlign;
    this.options.letterSpacing = nav1.letterSpacing;
    this.options.textTransform = nav1.textTransform;
    this.options.lineHeight = nav1.lineHeight;
    if ((base2 = this.options).text == null) {
      base2.text = "Main Nav";
    }
    if ((base3 = this.options).active == null) {
      base3.active = false;
    }
    if (this.options.active === true) {
      this.options.fontFamily = nav1ON.fontFamily;
      this.options.color = nav1ON.color;
    }
    _.defaults(this.options, {
      backgroundColor: null,
      x: 0,
      width: 102,
      height: 76
    });
    this.asset = new Layer({
      name: "asset",
      height: 48,
      width: 48,
      image: this.options.icon,
      backgroundColor: null
    });
    this.label = new TextLayer({
      name: "label",
      fontSize: this.options.fontSize,
      textAlign: this.options.textAlign,
      letterSpacing: this.options.letterSpacing,
      lineHeight: this.options.lineHeight,
      textTransform: this.options.textTransform,
      padding: this.options.padding,
      fontFamily: this.options.fontFamily,
      color: this.options.color,
      text: this.options.text,
      backgroundColor: null
    });
    navButt.__super__.constructor.call(this, this.options);
    this.width = this.label.width;
    this.asset.parent = this.label.parent = this;
    this.label.y = Align.bottom;
    this.label.x = this.asset.x = Align.center();
  }

  navButt.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      this.options.active = value;
      if (this.options.active === true) {
        this.label.fontFamily = nav1ON.fontFamily;
        return this.label.color = nav1ON.color;
      } else {
        this.label.fontFamily = nav1.fontFamily;
        return this.label.color = nav1.color;
      }
    }
  });

  return navButt;

})(Layer);

exports.ProdCard = (function(superClass) {
  extend(ProdCard, superClass);

  function ProdCard(options) {
    var base, base1, base2, base3, base4, base5, base6, base7;
    this.options = options != null ? options : {};
    this.options.width = $prodCard.width;
    this.options.height = $prodCard.height;
    this.options.backgroundColor = null;
    this.options.style = {
      position: "relative"
    };
    if ((base = this.options).spacersON == null) {
      base.spacersON = false;
    }
    if (this.options.spacersON === false) {
      this.spacer_bg = clear;
      this.spacer2_bg = clear;
      this.gutter_props = clear;
    } else {
      this.spacer_bg = PCspacer1.backgroundColor;
      this.spacer2_bg = PCimageSpacer.backgroundColor;
      this.gutter_props = PCgutterL.backgroundColor;
    }
    if ((base1 = this.options).exception == null) {
      base1.exception = true;
    }
    if (this.options.exception === true) {
      this.options.visible === true;
    }
    if ((base2 = this.options).productName == null) {
      base2.productName = "productName";
    }
    if ((base3 = this.options).subtitle == null) {
      base3.subtitle = "subtitle";
    }
    if ((base4 = this.options).price == null) {
      base4.price = "price";
    }
    if ((base5 = this.options).Size == null) {
      base5.Size = "Size";
    }
    if ((base6 = this.options).cal == null) {
      base6.cal = "cal";
    }
    if ((base7 = this.options).asset == null) {
      base7.asset = "images/design/sandwich.png";
    }
    this.gutterL = new Layer({
      frame: PCgutterL.frame,
      backgroundColor: this.gutter_props
    });
    this.gutterR = new Layer({
      frame: PCgutterR.frame,
      backgroundColor: this.gutter_props
    });
    this.imageContainer = new Layer({
      frame: PCimageContainer.frame,
      backgroundColor: this.spacer2_bg
    });
    this.textContainer = new Layer({
      x: PCtext.x,
      y: PCtext.y,
      width: PCtext.width,
      backgroundColor: null,
      style: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "flex-end"
      }
    });
    this.mask = new Layer({
      frame: PCimageMask.frame,
      backgroundColor: null,
      shadows: PCimageMask.shadows,
      borderRadius: PCimageMask.borderRadius,
      clip: true
    });
    this.picture = new Layer({
      frame: PCimage.frame,
      image: this.options.asset,
      backgroundColor: null
    });
    this.spacer1 = new Layer({
      size: PCspacer1.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.title = new TextLayer({
      x: PCtitle.x,
      width: PCtitle.width,
      fontSize: PCtitle.fontSize,
      fontFamily: PCtitle.fontFamily,
      lineHeight: PCtitle.lineHeight,
      letterSpacing: PCtitle.letterSpacing,
      textAlign: PCtitle.textAlign,
      color: PCtitle.color,
      text: this.options.productName,
      style: {
        position: "relative"
      },
      backgroundColor: null
    });
    this.spacer2 = new Layer({
      size: PCspacer2.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.subtitle = new TextLayer({
      width: PCsubtitle.width,
      fontSize: PCsubtitle.fontSize,
      fontFamily: PCsubtitle.fontFamily,
      textAlign: PCsubtitle.textAlign,
      lineHeight: PCsubtitle.lineHeight,
      letterSpacing: PCsubtitle.letterSpacing,
      color: PCsubtitle.color,
      text: this.options.subtitle,
      visible: this.options.exception,
      style: {
        position: "relative"
      }
    });
    this.spacer3 = new Layer({
      size: PCspacer3.size,
      backgroundColor: this.spacer_bg,
      style: {
        position: "relative"
      }
    });
    this.price = new TextLayer({
      width: PCprice.width,
      fontSize: PCprice.fontSize,
      fontFamily: PCprice.fontFamily,
      textAlign: PCprice.textAlign,
      lineHeight: PCprice.lineHeight,
      letterSpacing: PCprice.letterSpacing,
      text: PCprice.text,
      style: {
        position: "relative"
      },
      template: {
        price: this.options.price,
        Size: this.options.Size,
        cal: this.options.cal
      }
    });
    ProdCard.__super__.constructor.call(this, this.options);
    this.picture.parent = this.mask;
    this.mask.parent = this.imageContainer;
    this.spacer1.parent = this.title.parent = this.spacer2.parent = this.subtitle.parent = this.spacer3.parent = this.price.parent = this.textContainer;
    this.gutterL.parent = this.gutterR.parent = this.textContainer.parent = this.imageContainer.parent = this;
  }

  ProdCard.define('spacersON', {
    get: function() {
      return this.options.spacersON;
    },
    set: function() {
      return function(value) {
        this.options.spacersON = value;
        if (this.options.spacersON === true) {
          this.spacer_bg === PCspacer1.backgroundColor;
          this.spacer2_bg === PCimageSpacer.backgroundColor;
          return this.gutter_props === PCgutterL.backgroundColor;
        } else {
          this.spacer_bg === clear;
          this.spacer2_bg === clear;
          return this.gutter_props === clear;
        }
      };
    }
  });

  ProdCard.define('exception', {
    get: function() {
      return this.options.exception;
    },
    set: function(value) {
      this.options.exception = value;
      if (this.options.exception === true) {
        return this.subtitle.visible = true;
      } else {
        return this.subtitle.visible = false;
      }
    }
  });

  return ProdCard;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NtY2Rlcm1vdHQyL0RvY3VtZW50cy9HaXRIdWIva2lvc2tOYXZTdHVkeS9uYXZzdHVkeS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zbWNkZXJtb3R0Mi9Eb2N1bWVudHMvR2l0SHViL2tpb3NrTmF2U3R1ZHkvbmF2c3R1ZHkuZnJhbWVyL21vZHVsZXMvU3R5bGVndWlkZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zbWNkZXJtb3R0Mi9Eb2N1bWVudHMvR2l0SHViL2tpb3NrTmF2U3R1ZHkvbmF2c3R1ZHkuZnJhbWVyL21vZHVsZXMvQ2F0ZWdvcmllcy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIyMgQ29sb3JzICMjI1xuXG53aGl0ZSA9IG5ldyBDb2xvciAoXCIjRkZGXCIpXG5ibGFjayA9IG5ldyBDb2xvciAoXCIjMDAwXCIpXG5ibHVlID0gbmV3IENvbG9yIChcIiMwMkNDRDBcIilcbnNwYWNlciA9IG5ldyBDb2xvcihcInJnYmEoMiwyMDQsMjA4LC4zKVwiKVxubWVkR3JlZW4gPSBuZXcgQ29sb3IgKFwiIzZCOUY2MlwiKVxuZGtHcmVlbiA9IG5ldyBDb2xvciAoXCIjNEM3NTNGXCIpXG5ka0dyZXlUeHQgPSBuZXcgQ29sb3IgKFwiIzM1MzgzRFwiKVxubHRHcmV5VHh0ID0gbmV3IENvbG9yIChcIiM2RjZGNzVcIilcbmRpc2FibGVkVHh0ID0gbmV3IENvbG9yIChcIiM5NDk0OTlcIilcbmx0R3JleUJnID0gbmV3IENvbG9yIChcIiNGMUYxRjFcIilcbmNsZWFyID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCJcblxuXG4jIyMgVHlwZSBTdHlsZXMgIyMjXG4jICBcImZvbnRTdHlsZSBmb250V2VpZ2h0IGZvbnRTaXplL2xpbmVIZWlnaHQgZm9udEZhbWlseVwiICAjXG5IMSA9XG5cdGZvbnQ6IFwiNjAwIDQwcHgvMS4xIEFyY2hlci1TZW1pYm9sZFwiXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogZGtHcmV5VHh0XG5cdGxldHRlclNwYWNpbmc6IC0wLjg5XG5cdHBhZGRpbmc6XG5cdFx0dG9wOiAtNFxuXHRcdGJvdHRvbTogLTRcblxubmF2MSA9IFxuXHRmb250U2l6ZTogMjBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRsZXR0ZXJTcGFjaW5nOiAuMlxuXHRsaW5lSGVpZ2h0OiAxLjJcblx0dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxuXHRwYWRkaW5nOlxuXHRcdHRvcDogLTRcblx0XHRib3R0b206IC00XG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1SZWd1bGFyXCJcblx0Y29sb3I6IGx0R3JleVR4dFxuXG5uYXYxT04gPVxuXHRmb250RmFtaWx5OiBcIkNhbGlicmUtTWVkaXVtXCJcblx0Y29sb3I6IGRrR3JleVR4dFxuXG5cbnN1Ym5hdiA9IFxuXHRmb250U2l6ZTogMjBcblx0dGV4dEFsaWduOiBcImp1c3RpZnlcIlxuXHRsZXR0ZXJTcGFjaW5nOiAwXG5cdGxpbmVIZWlnaHQ6IDFcblx0cGFkZGluZzpcblx0XHR0b3A6IC00XG5cdFx0Ym90dG9tOiAtNFxuXHRcdHJpZ2h0OiAzMFxuXHRcdGxlZnQ6IDMwXG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1SZWd1bGFyXCJcblx0Y29sb3I6IGx0R3JleVR4dFxuXG5zdWJuYXZPTiA9XG5cdGZvbnRGYW1pbHk6IFwiQ2FsaWJyZS1NZWRpdW1cIlxuXHRjb2xvcjogZGtHcmV5VHh0XG5cblxuXG5cbiMjIyBOYXZpZ2F0aW9uICMjI1xuXG4jIyBTdWJjYXRlZ29yeSAjI1xuY2xhc3MgZXhwb3J0cy5zdWJDYXRzIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSktPlxuXHRcdEBvcHRpb25zLmZvbnRTaXplID0gc3VibmF2LmZvbnRTaXplXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBzdWJuYXYuZm9udEZhbWlseVxuXHRcdEBvcHRpb25zLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID0gc3VibmF2LmxldHRlclNwYWNpbmdcblx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID0gc3VibmF2LmxpbmVIZWlnaHRcbiMgXHRcdEBvcHRpb25zLnBhZGRpbmcgPSBzdWJuYXYucGFkZGluZ1xuXHRcdEBvcHRpb25zLmNvbG9yID89IHN1Ym5hdi5jb2xvclxuXHRcdEBvcHRpb25zLnRleHQgPz0gXCJTdWJuYXYgYnV0dG9uIVwiXG5cdFx0QG9wdGlvbnMuYWN0aXZlID89IGZhbHNlXG5cdFx0aWYgQG9wdGlvbnMuYWN0aXZlIGlzIHRydWVcblx0XHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPSBzdWJuYXZPTi5mb250RmFtaWx5XG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IHN1Ym5hdk9OLmNvbG9yXG5cdFx0XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuI1x0XHRcdGJvcmRlckNvbG9yOiBibGFja1xuI1x0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHRoZWlnaHQ6IDc0XG4jIFx0XHRcdHdpZHRoOiBAb3B0aW9ucy50ZXh0Lmxlbmd0aCAqICgoQG9wdGlvbnMuZm9udFNpemUgKyAzKS8yKSs2MFxuXHRcdFx0XG5cdFx0XHRcblx0XHRAbGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy50ZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy5jb2xvclxuXHRcdFx0dGV4dEFsaWduOiBAb3B0aW9ucy50ZXh0QWxpZ25cblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG4jXHRcdFx0d2lkdGg6IEBvcHRpb25zLnRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpLzIpXG5cdFx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRAbGFiZWwueCA9IDIwXG5cdFx0QC53aWR0aCA9IEBsYWJlbC53aWR0aCs0MFxuXHRcblx0QGRlZmluZSAnYWN0aXZlJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHZhbHVlXG5cdFx0XHRpZiBAb3B0aW9ucy5hY3RpdmUgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuZm9udEZhbWlseSA9IHN1Ym5hdk9OLmZvbnRGYW1pbHlcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gc3VibmF2T04uY29sb3Jcblx0XHRcdGVsc2Vcblx0XHRcdFx0QGxhYmVsLmZvbnRGYW1pbHkgPSBzdWJuYXYuZm9udEZhbWlseVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBzdWJuYXYuY29sb3JcblxuXG4jIyBNYWluIE5hdiBCdXR0b25zICMjXG5jbGFzcyBleHBvcnRzLm5hdkJ1dHQgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KS0+XG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPSBuYXYxLmZvbnRTaXplXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBuYXYxLmZvbnRGYW1pbHlcblx0XHRAb3B0aW9ucy5jb2xvciA/PSBuYXYxLmNvbG9yXG5cdFx0QG9wdGlvbnMudGV4dEFsaWduID0gbmF2MS50ZXh0QWxpZ25cblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID0gbmF2MS5sZXR0ZXJTcGFjaW5nXG5cdFx0QG9wdGlvbnMudGV4dFRyYW5zZm9ybSA9IG5hdjEudGV4dFRyYW5zZm9ybVxuXHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBuYXYxLmxpbmVIZWlnaHRcblx0XHRAb3B0aW9ucy50ZXh0ID89IFwiTWFpbiBOYXZcIlxuXHRcdEBvcHRpb25zLmFjdGl2ZSA/PSBmYWxzZVxuXHRcdGlmIEBvcHRpb25zLmFjdGl2ZSBpcyB0cnVlXG5cdFx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID0gbmF2MU9OLmZvbnRGYW1pbHlcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gbmF2MU9OLmNvbG9yXG5cdFx0XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0eDogMFxuXHRcdFx0d2lkdGg6IDEwMlxuXHRcdFx0aGVpZ2h0OiA3NlxuI1x0XHRcdGJvcmRlckNvbG9yOiBibGFja1xuI1x0XHRcdGJvcmRlcldpZHRoOiAxXG5cblx0XHRAYXNzZXQgPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwiYXNzZXRcIlxuXHRcdFx0aGVpZ2h0OiA0OFxuXHRcdFx0d2lkdGg6IDQ4XG5cdFx0XHRpbWFnZTogQG9wdGlvbnMuaWNvblxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cblx0XHRAbGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0dGV4dEFsaWduOiBAb3B0aW9ucy50ZXh0QWxpZ25cblx0XHRcdGxldHRlclNwYWNpbmc6IEBvcHRpb25zLmxldHRlclNwYWNpbmdcblx0XHRcdGxpbmVIZWlnaHQ6IEBvcHRpb25zLmxpbmVIZWlnaHRcblx0XHRcdHRleHRUcmFuc2Zvcm06IEBvcHRpb25zLnRleHRUcmFuc2Zvcm1cblx0XHRcdHBhZGRpbmc6IEBvcHRpb25zLnBhZGRpbmdcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy5jb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMudGV4dFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0IyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEAud2lkdGggPSBAbGFiZWwud2lkdGhcblxuXHRcdEBhc3NldC5wYXJlbnQgPSBAbGFiZWwucGFyZW50ID0gQFxuXHRcdFxuXHRcdEBsYWJlbC55ID0gQWxpZ24uYm90dG9tXG5cdFx0QGxhYmVsLnggPSBAYXNzZXQueCA9IEFsaWduLmNlbnRlcigpXG5cdFx0XG5cdFx0IyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0QGRlZmluZSAnYWN0aXZlJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHZhbHVlXG5cdFx0XHRpZiBAb3B0aW9ucy5hY3RpdmUgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuZm9udEZhbWlseSA9IG5hdjFPTi5mb250RmFtaWx5XG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IG5hdjFPTi5jb2xvclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAbGFiZWwuZm9udEZhbWlseSA9IG5hdjEuZm9udEZhbWlseVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBuYXYxLmNvbG9yXHRcblxuXG5cbiMjIFByb2R1Y3QgR3JpZCBDYXJkcyAjI1xuXG5jbGFzcyBleHBvcnRzLlByb2RDYXJkIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSktPlxuXHRcdEBvcHRpb25zLndpZHRoID0gJHByb2RDYXJkLndpZHRoXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID0gJHByb2RDYXJkLmhlaWdodFxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IG51bGxcblx0XHRAb3B0aW9ucy5zdHlsZSA9XG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cblx0XHRAb3B0aW9ucy5zcGFjZXJzT04gPz0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5zcGFjZXJzT04gaXMgZmFsc2Vcblx0XHRcdEBzcGFjZXJfYmcgPSBjbGVhclxuXHRcdFx0QHNwYWNlcjJfYmcgPSBjbGVhclxuXHRcdFx0QGd1dHRlcl9wcm9wcyA9IGNsZWFyXG5cdFx0ZWxzZVxuXHRcdFx0QHNwYWNlcl9iZyA9IFBDc3BhY2VyMS5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdEBzcGFjZXIyX2JnID0gUENpbWFnZVNwYWNlci5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdEBndXR0ZXJfcHJvcHMgPSBQQ2d1dHRlckwuYmFja2dyb3VuZENvbG9yXG5cdFx0QG9wdGlvbnMuZXhjZXB0aW9uID89IHRydWVcblx0XHRpZiBAb3B0aW9ucy5leGNlcHRpb24gaXMgdHJ1ZVxuXHRcdFx0QG9wdGlvbnMudmlzaWJsZSBpcyB0cnVlXG5cblx0XHRAb3B0aW9ucy5wcm9kdWN0TmFtZSA/PSBcInByb2R1Y3ROYW1lXCJcblx0XHRAb3B0aW9ucy5zdWJ0aXRsZSA/PSBcInN1YnRpdGxlXCJcblx0XHRAb3B0aW9ucy5wcmljZSA/PSBcInByaWNlXCJcblx0XHRAb3B0aW9ucy5TaXplID89IFwiU2l6ZVwiXG5cdFx0QG9wdGlvbnMuY2FsID89IFwiY2FsXCJcblx0XHRAb3B0aW9ucy5hc3NldCA/PSBcImltYWdlcy9kZXNpZ24vc2FuZHdpY2gucG5nXCJcblxuXG4jIC0tIEd1dHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBndXR0ZXJMID0gbmV3IExheWVyXG5cdFx0XHRmcmFtZTogUENndXR0ZXJMLmZyYW1lXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBndXR0ZXJfcHJvcHNcblx0XHRAZ3V0dGVyUiA9IG5ldyBMYXllclxuXHRcdFx0ZnJhbWU6IFBDZ3V0dGVyUi5mcmFtZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAZ3V0dGVyX3Byb3BzXG5cbiMgLS0gQ29udGFpbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBpbWFnZUNvbnRhaW5lciA9IG5ldyBMYXllclxuXHRcdFx0ZnJhbWU6IFBDaW1hZ2VDb250YWluZXIuZnJhbWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNwYWNlcjJfYmdcblxuXHRcdFxuXHRcdEB0ZXh0Q29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHR4OiBQQ3RleHQueFxuXHRcdFx0eTogUEN0ZXh0Lnlcblx0XHRcdHdpZHRoOiBQQ3RleHQud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIlxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiXG5cdFx0XHRcdFxuXG4jIC0tIEltYWdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbWFzayA9IG5ldyBMYXllclxuXHRcdFx0ZnJhbWU6IFBDaW1hZ2VNYXNrLmZyYW1lXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHNoYWRvd3M6IFBDaW1hZ2VNYXNrLnNoYWRvd3Ncblx0XHRcdGJvcmRlclJhZGl1czogUENpbWFnZU1hc2suYm9yZGVyUmFkaXVzXG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRcblx0XHRAcGljdHVyZSA9IG5ldyBMYXllclxuXHRcdFx0ZnJhbWU6IFBDaW1hZ2UuZnJhbWVcblx0XHRcdGltYWdlOiBAb3B0aW9ucy5hc3NldFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cbiMgLS0gVGV4dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHNwYWNlcjEgPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IFBDc3BhY2VyMS5zaXplXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBzcGFjZXJfYmdcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cblx0XHRAdGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR4OiBQQ3RpdGxlLnhcblx0XHRcdHdpZHRoOiBQQ3RpdGxlLndpZHRoXG5cdFx0XHRmb250U2l6ZTogUEN0aXRsZS5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogUEN0aXRsZS5mb250RmFtaWx5XG5cdFx0XHRsaW5lSGVpZ2h0OiBQQ3RpdGxlLmxpbmVIZWlnaHRcblx0XHRcdGxldHRlclNwYWNpbmc6IFBDdGl0bGUubGV0dGVyU3BhY2luZ1xuXHRcdFx0dGV4dEFsaWduOiBQQ3RpdGxlLnRleHRBbGlnblxuXHRcdFx0Y29sb3I6IFBDdGl0bGUuY29sb3Jcblx0XHRcdHRleHQ6IEBvcHRpb25zLnByb2R1Y3ROYW1lXG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cblx0XHRAc3BhY2VyMiA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogUENzcGFjZXIyLnNpemVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNwYWNlcl9iZ1xuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBzdWJ0aXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOiBQQ3N1YnRpdGxlLndpZHRoXG5cdFx0XHRmb250U2l6ZTogUENzdWJ0aXRsZS5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogUENzdWJ0aXRsZS5mb250RmFtaWx5XG5cdFx0XHR0ZXh0QWxpZ246IFBDc3VidGl0bGUudGV4dEFsaWduXG5cdFx0XHRsaW5lSGVpZ2h0OiBQQ3N1YnRpdGxlLmxpbmVIZWlnaHRcblx0XHRcdGxldHRlclNwYWNpbmc6IFBDc3VidGl0bGUubGV0dGVyU3BhY2luZ1xuXHRcdFx0Y29sb3I6IFBDc3VidGl0bGUuY29sb3Jcblx0XHRcdHRleHQ6IEBvcHRpb25zLnN1YnRpdGxlXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5leGNlcHRpb25cblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cblx0XHRAc3BhY2VyMyA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogUENzcGFjZXIzLnNpemVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNwYWNlcl9iZ1xuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxuXHRcdEBwcmljZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOiBQQ3ByaWNlLndpZHRoXG5cdFx0XHRmb250U2l6ZTogUENwcmljZS5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogUENwcmljZS5mb250RmFtaWx5XG5cdFx0XHR0ZXh0QWxpZ246IFBDcHJpY2UudGV4dEFsaWduXG5cdFx0XHRsaW5lSGVpZ2h0OiBQQ3ByaWNlLmxpbmVIZWlnaHRcblx0XHRcdGxldHRlclNwYWNpbmc6IFBDcHJpY2UubGV0dGVyU3BhY2luZ1xuXHRcdFx0dGV4dDogUENwcmljZS50ZXh0XG5cdFx0XHRzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXHRcdFx0dGVtcGxhdGU6XG5cdFx0XHRcdHByaWNlOiBAb3B0aW9ucy5wcmljZVxuXHRcdFx0XHRTaXplOiBAb3B0aW9ucy5TaXplXG5cdFx0XHRcdGNhbDogQG9wdGlvbnMuY2FsXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG4jIC0tIEVORCBTVVBFUiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuIyAtLSBJbWFnZSBTZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBwaWN0dXJlLnBhcmVudCA9IEBtYXNrXG5cdFx0QG1hc2sucGFyZW50ID0gQGltYWdlQ29udGFpbmVyXG5cbiMgLS0gVGV4dCBTZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBzcGFjZXIxLnBhcmVudCA9IEB0aXRsZS5wYXJlbnQgPSBAc3BhY2VyMi5wYXJlbnQgPSBAc3VidGl0bGUucGFyZW50ID0gQHNwYWNlcjMucGFyZW50ID0gQHByaWNlLnBhcmVudCA9IEB0ZXh0Q29udGFpbmVyXG5cbiMgLS0gTUFJTiBQQVJFTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRAZ3V0dGVyTC5wYXJlbnQgPSBAZ3V0dGVyUi5wYXJlbnQgPSBAdGV4dENvbnRhaW5lci5wYXJlbnQgPSBAaW1hZ2VDb250YWluZXIucGFyZW50ID0gQFxuXG4jIC0tIEdldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuIyB0dXJuIG9uIHNwYWNlcnNcblx0QGRlZmluZSAnc3BhY2Vyc09OJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5zcGFjZXJzT05cblx0XHRzZXQ6IC0+ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLnNwYWNlcnNPTiA9IHZhbHVlXG5cdFx0XHRpZiBAb3B0aW9ucy5zcGFjZXJzT04gaXMgdHJ1ZVxuXHRcdFx0XHRAc3BhY2VyX2JnID09IFBDc3BhY2VyMS5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0QHNwYWNlcjJfYmcgPT0gUENpbWFnZVNwYWNlci5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0QGd1dHRlcl9wcm9wcyA9PSBQQ2d1dHRlckwuYmFja2dyb3VuZENvbG9yXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzcGFjZXJfYmcgPT0gY2xlYXJcblx0XHRcdFx0QHNwYWNlcjJfYmcgPT0gY2xlYXJcblx0XHRcdFx0QGd1dHRlcl9wcm9wcyA9PSBjbGVhclxuXG4jIHNldCBhIGRhdGUvZGF5cGFydCBleGNlcHRpb24gKGllIFwic2VydmVkIHVudGlsIDExYW1cIilcblx0QGRlZmluZSAnZXhjZXB0aW9uJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5leGNlcHRpb25cblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmV4Y2VwdGlvbiA9IHZhbHVlXG5cdFx0XHRpZiBAb3B0aW9ucy5leGNlcHRpb24gaXMgdHJ1ZVxuXHRcdFx0XHRAc3VidGl0bGUudmlzaWJsZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHN1YnRpdGxlLnZpc2libGUgPSBmYWxzZVxuXG4jIC0tLS0tLS0tIEVORCBPRiBDTEFTUyAtLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4iLCJcblx0Q2F0ZWdvcmllcyA9IFtcblx0XHR7XG5cdFx0XHRpZDogXCJicmVha2Zhc3RcIixcblx0XHRcdG5hbWU6IFwiQnJlYWtmYXN0XCIsXG5cdFx0XHRpY29uOiBcImJhZ2VsSUNPXCIsXG5cdFx0XHRzdWJjYXRzOiBbXCJFZ2cgU2FuZHdpY2hlc1wiLCBcIkJha2VkIEVnZ3NcIiwgXCJPYXRtZWFsXCIsIFwiQmFnZWxzICYgU3ByZWFkc1wiLCBcIkNvZmZlZSAmIFRlYVwiXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcImx1bmNoRGlubmVyXCIsXG5cdFx0XHRuYW1lOiBcIkx1bmNoICYgRGlubmVyXCIsXG5cdFx0XHRpY29uOiBcInNhbmR3aWNoSUNPXCIsXG5cdFx0XHRzdWJjYXRzOiBbXCJTYW5kd2ljaGVzXCIsIFwiU2FsYWRzXCIsIFwiU291cHNcIiwgXCJCb3dsc1wiXVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwia2lkc1wiLFxuXHRcdFx0bmFtZTogXCJLaWRzXCIsXG5cdFx0XHRpY29uOiBcImtpZHNJQ09cIixcblx0XHRcdHN1YmNhdHM6IFtcIlNvdXAgJiBQYXN0YVwiLCBcIlNhbmR3aWNoZXNcIiwgXCJQQU5EQVNcIiwgXCJNb25rZXlzXCJdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCJiYWtlcnlcIixcblx0XHRcdG5hbWU6IFwiQmFrZXJ5XCIsXG5cdFx0XHRpY29uOiBcImNyb2lzc2FudElDT1wiLFxuXHRcdFx0c3ViY2F0czogW1wiU3dlZXRzXCIsIFwiQmFnZWxzXCIsIFwiUGFuZGFzXCJdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCJiZXZlcmFnZXNcIixcblx0XHRcdG5hbWU6IFwiQmV2ZXJhZ2VzXCIsXG5cdFx0XHRpY29uOiBcImNvZmZlZUlDT1wiLFxuXHRcdFx0c3ViY2F0czogW1wiQ29mZmVlICYgVGVhXCIsIFwiSWNlZCBUZWEgJiBMZW1vbmFkZVwiLCBcIlNtb290aGllc1wiLCBcIkJvdHRsZWQgU3R1ZmZcIl0sXG5cdFx0fSxcblxuXHRcdF1cbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBR0FBO0FEQ0MsSUFBQTs7QUFBQSxVQUFBLEdBQWE7RUFDWjtJQUNDLEVBQUEsRUFBSSxXQURMO0lBRUMsSUFBQSxFQUFNLFdBRlA7SUFHQyxJQUFBLEVBQU0sVUFIUDtJQUlDLE9BQUEsRUFBUyxDQUFDLGdCQUFELEVBQW1CLFlBQW5CLEVBQWlDLFNBQWpDLEVBQTRDLGtCQUE1QyxFQUFnRSxjQUFoRSxDQUpWO0dBRFksRUFPWjtJQUNDLEVBQUEsRUFBSSxhQURMO0lBRUMsSUFBQSxFQUFNLGdCQUZQO0lBR0MsSUFBQSxFQUFNLGFBSFA7SUFJQyxPQUFBLEVBQVMsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUpWO0dBUFksRUFhWjtJQUNDLEVBQUEsRUFBSSxNQURMO0lBRUMsSUFBQSxFQUFNLE1BRlA7SUFHQyxJQUFBLEVBQU0sU0FIUDtJQUlDLE9BQUEsRUFBUyxDQUFDLGNBQUQsRUFBaUIsWUFBakIsRUFBK0IsUUFBL0IsRUFBeUMsU0FBekMsQ0FKVjtHQWJZLEVBbUJaO0lBQ0MsRUFBQSxFQUFJLFFBREw7SUFFQyxJQUFBLEVBQU0sUUFGUDtJQUdDLElBQUEsRUFBTSxjQUhQO0lBSUMsT0FBQSxFQUFTLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckIsQ0FKVjtHQW5CWSxFQXlCWjtJQUNDLEVBQUEsRUFBSSxXQURMO0lBRUMsSUFBQSxFQUFNLFdBRlA7SUFHQyxJQUFBLEVBQU0sV0FIUDtJQUlDLE9BQUEsRUFBUyxDQUFDLGNBQUQsRUFBaUIscUJBQWpCLEVBQXdDLFdBQXhDLEVBQXFELGVBQXJELENB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
