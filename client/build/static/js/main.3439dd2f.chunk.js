(this["webpackJsonpmechkb-ecommerce"] =
  this["webpackJsonpmechkb-ecommerce"] || []).push([
  [0],
  {
    40: function(e, n, t) {
      e.exports = t(59);
    },
    58: function(e, n, t) {},
    59: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        r = t.n(a),
        i = t(32),
        c = t.n(i),
        o = t(5),
        l = t.n(o),
        s = t(13),
        p = t(9),
        m = t(3),
        u = t(2),
        d = t(8),
        b = t(14);
      function g() {
        var e = Object(m.a)([
          "\n  min-width: 30%;\n  position: relative;\n  height: 240px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n\n  &:hover {\n    cursor: pointer;\n\n    & .background-image {\n      transform: scale(1.1);\n      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n\n    & .content {\n      opacity: 0.9;\n    }\n  }\n\n  &:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  &.large {\n    height: 380px;\n  }\n\n  .background-image {\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    position: absolute;\n  }\n\n  .content {\n    height: 90px;\n    padding: 0 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    background-color: white;\n    opacity: 0.7;\n\n    .title {\n      font-weight: bold;\n      margin-bottom: 6px;\n      font-size: 22px;\n      color: #4a4a4a;\n    }\n\n    .subtitle {\n      font-weight: lighter;\n      font-size: 16px;\n    }\n  }\n"
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var h = Object(b.f)(function(e) {
          var n = e.title,
            t = e.linkUrl,
            a = e.imageUrl,
            i = e.size,
            c = e.history,
            o = e.match;
          return r.a.createElement(
            f,
            {
              className: "".concat(i && i, " menu-item"),
              onClick: function() {
                return c.push("".concat(o.url).concat(t));
              }
            },
            r.a.createElement("div", {
              className: "background-image",
              style: { backgroundImage: "url(".concat(a, ")") }
            }),
            r.a.createElement(
              "div",
              { className: "content" },
              r.a.createElement("h1", { className: "title" }, n.toUpperCase()),
              r.a.createElement("span", { className: "subtitle" }, "SHOP NOW")
            )
          );
        }),
        f = Object(u.b)("div")(g());
      function v() {
        var e = Object(m.a)([
          "\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var w = function() {
          var e = Object(a.useState)([
              {
                title: "keyboards",
                imageUrl:
                  "https://live.staticflickr.com/5826/30295544320_68b9b0d6b5_b.jpg",
                id: 1,
                linkUrl: "shop/keyboards"
              },
              {
                title: "keycaps",
                imageUrl:
                  "https://i.pinimg.com/originals/93/6a/fc/936afc46bac9f85de22966c88677217d.jpg",
                id: 2,
                linkUrl: "shop/keycaps"
              },
              {
                title: "switches",
                imageUrl:
                  "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Silent_Red_1024x1024@2x.jpg?v=1558704648",
                id: 3,
                linkUrl: "shop/switches"
              },
              {
                title: "accessories",
                imageUrl:
                  "https://images.idgesg.net/images/article/2018/07/img_20180706_202831-100764491-large.jpg",
                size: "large",
                id: 4,
                linkUrl: "shop/accessories"
              },
              {
                title: "parts",
                imageUrl:
                  "https://cdn.shopify.com/s/files/1/1674/0405/products/sp111_plate_768x.png?v=1575664053",
                size: "large",
                id: 5,
                linkUrl: "shop/parts"
              }
            ]),
            n = Object(p.a)(e, 1)[0];
          return r.a.createElement(
            x,
            { className: "directory-menu" },
            n.map(function(e) {
              var n = e.id,
                t = Object(d.a)(e, ["id"]);
              return r.a.createElement(h, Object.assign({ key: n }, t));
            })
          );
        },
        x = Object(u.b)("div")(v());
      function k() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var y = function() {
          return r.a.createElement(
            j,
            { className: "homepage" },
            r.a.createElement(w, null)
          );
        },
        j = Object(u.b)("div")(k()),
        E = t(38),
        U = [
          {
            id: 1,
            title: "Keyboards",
            routeName: "/shop/keyboards",
            items: [
              {
                id: 1,
                name: "Brown Brim",
                imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                price: 25
              },
              {
                id: 2,
                name: "Blue Beanie",
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                price: 18
              },
              {
                id: 3,
                name: "Brown Cowboy",
                imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                price: 35
              },
              {
                id: 4,
                name: "Grey Brim",
                imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
                price: 25
              },
              {
                id: 5,
                name: "Green Beanie",
                imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
                price: 18
              },
              {
                id: 6,
                name: "Palm Tree Cap",
                imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                price: 14
              },
              {
                id: 7,
                name: "Red Beanie",
                imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
                price: 18
              },
              {
                id: 8,
                name: "Wolf Cap",
                imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                price: 14
              },
              {
                id: 9,
                name: "Blue Snapback",
                imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                price: 16
              }
            ]
          },
          {
            id: 2,
            title: "Keycaps",
            routeName: "sneakers",
            items: [
              {
                id: 1,
                name: "Adidas NMD",
                imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                price: 220
              },
              {
                id: 2,
                name: "Adidas Yeezy",
                imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
                price: 280
              },
              {
                id: 3,
                name: "Black Converse",
                imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
                price: 110
              },
              {
                id: 4,
                name: "Nike White AirForce",
                imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
                price: 160
              },
              {
                id: 5,
                name: "Nike Red High Tops",
                imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
                price: 160
              },
              {
                id: 6,
                name: "Nike Brown High Tops",
                imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
                price: 160
              },
              {
                id: 7,
                name: "Air Jordan Limited",
                imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
                price: 190
              },
              {
                id: 8,
                name: "Timberlands",
                imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
                price: 200
              }
            ]
          },
          {
            id: 3,
            title: "Jackets",
            routeName: "jackets",
            items: [
              {
                id: 1,
                name: "Black Jean Shearling",
                imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
                price: 125
              },
              {
                id: 2,
                name: "Blue Jean Jacket",
                imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
                price: 90
              },
              {
                id: 3,
                name: "Grey Jean Jacket",
                imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
                price: 90
              },
              {
                id: 4,
                name: "Brown Shearling",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 165
              },
              {
                id: 5,
                name: "Tan Trench",
                imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
                price: 185
              }
            ]
          },
          {
            id: 4,
            title: "Womens",
            routeName: "womens",
            items: [
              {
                id: 1,
                name: "Blue Tanktop",
                imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
                price: 25
              },
              {
                id: 2,
                name: "Floral Blouse",
                imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                price: 20
              },
              {
                id: 3,
                name: "Floral Dress",
                imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                price: 80
              },
              {
                id: 4,
                name: "Red Dots Dress",
                imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
                price: 80
              },
              {
                id: 5,
                name: "Striped Sweater",
                imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
                price: 45
              },
              {
                id: 6,
                name: "Yellow Track Suit",
                imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
                price: 135
              },
              {
                id: 7,
                name: "White Blouse",
                imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
                price: 20
              }
            ]
          },
          {
            id: 5,
            title: "Mens",
            routeName: "mens",
            items: [
              {
                id: 1,
                name: "Camo Down Vest",
                imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
                price: 325
              },
              {
                id: 2,
                name: "Floral T-shirt",
                imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                price: 20
              },
              {
                id: 3,
                name: "Black & White Longsleeve",
                imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
                price: 25
              },
              {
                id: 4,
                name: "Pink T-shirt",
                imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                price: 25
              },
              {
                id: 5,
                name: "Jean Long Sleeve",
                imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
                price: 40
              },
              {
                id: 6,
                name: "Burgundy T-shirt",
                imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
                price: 25
              }
            ]
          }
        ];
      function O() {
        var e = Object(m.a)([
          "\n  width: 22%;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n\n  .image {\n    width: 100%;\n    height: 95%;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 5px;\n  }\n\n  .collection-footer {\n    width: 100%;\n    height: 5%;\n    display: flex;\n    justify-content: space-between;\n    font-size: 18px;\n\n    .name {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    .price {\n      width: 10%;\n    }\n  }\n"
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      var N = function(e) {
          e.id;
          var n = e.name,
            t = e.price,
            a = e.imageUrl;
          return r.a.createElement(
            S,
            null,
            r.a.createElement("div", {
              className: "image",
              style: { backgroundImage: "url(".concat(a, ")") }
            }),
            r.a.createElement(
              "div",
              { className: "collection-footer" },
              r.a.createElement("span", { className: "name" }, n),
              r.a.createElement("span", { className: "price" }, t)
            )
          );
        },
        S = Object(u.b)("div")(O());
      function B() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  .title {\n    font-size: 28px;\n    margin-bottom: 25px;\n  }\n\n  .preview {\n    display: flex;\n    justify-content: space-between;\n  }\n"
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      var C = function(e) {
          var n = e.title,
            t = e.items;
          return r.a.createElement(
            z,
            { className: "collection-preview" },
            r.a.createElement("h1", { className: "title" }, n.toUpperCase()),
            r.a.createElement(
              "div",
              { className: "preview" },
              t
                .filter(function(e, n) {
                  return n < 4;
                })
                .map(function(e) {
                  var n = e.id,
                    t = Object(d.a)(e, ["id"]);
                  return r.a.createElement(N, Object.assign({ key: n }, t));
                })
            )
          );
        },
        z = Object(u.b)("div")(B()),
        P = function() {
          var e = Object(a.useState)(Object(E.a)(U)),
            n = Object(p.a)(e, 1)[0];
          return r.a.createElement(
            "div",
            { className: "shop-page" },
            n.map(function(e) {
              var n = e.id,
                t = Object(d.a)(e, ["id"]);
              return r.a.createElement(C, Object.assign({ key: n }, t));
            })
          );
        },
        T = t(11),
        I = t(37),
        W = t(17),
        J = t.n(W),
        G =
          (t(50),
          t(53),
          function(e, n) {
            var t, a, r, i;
            return l.a.async(
              function(c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      if (e) {
                        c.next = 2;
                        break;
                      }
                      return c.abrupt("return");
                    case 2:
                      return (
                        (t = M.doc("users/".concat(e.uid))),
                        (c.next = 5),
                        l.a.awrap(t.get())
                      );
                    case 5:
                      if (c.sent.exists) {
                        c.next = 17;
                        break;
                      }
                      return (
                        (a = e.displayName),
                        (r = e.email),
                        (i = new Date()),
                        (c.prev = 9),
                        (c.next = 12),
                        l.a.awrap(
                          t.set(
                            Object(s.a)(
                              { displayName: a, email: r, createdAt: i },
                              n
                            )
                          )
                        )
                      );
                    case 12:
                      c.next = 17;
                      break;
                    case 14:
                      (c.prev = 14),
                        (c.t0 = c.catch(9)),
                        console.log("error creating user", c.t0.message);
                    case 17:
                      return c.abrupt("return", t);
                    case 18:
                    case "end":
                      return c.stop();
                  }
              },
              null,
              null,
              [[9, 14]]
            );
          });
      J.a.initializeApp({
        apiKey: "AIzaSyCf-43t6dHyjUOy9RhlKZ45tY2uyau6gZA",
        authDomain: "mechkb-ecommerce.firebaseapp.com",
        databaseURL: "https://mechkb-ecommerce.firebaseio.com",
        projectId: "mechkb-ecommerce",
        storageBucket: "mechkb-ecommerce.appspot.com",
        messagingSenderId: "1079119544519",
        appId: "1:1079119544519:web:75fa6840e1f3d31129bee2",
        measurementId: "G-YMZ3KNH1MR"
      });
      var A = J.a.auth(),
        M = J.a.firestore(),
        D = new J.a.auth.GoogleAuthProvider();
      D.setCustomParameters({ prompt: "select_account" });
      var K = function() {
        return A.signInWithPopup(D);
      };
      J.a;
      function L() {
        var e = Object(m.a)([
          "\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  .logo-container {\n    display: flex;\n    align-items: center;\n  }\n\n  .options {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    .option {\n      padding: 10px 15px;\n      cursor: pointer;\n    }\n  }\n"
        ]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      var R = function(e) {
          var n = e.currentUser.currentUser;
          return (
            console.log(n) ||
            r.a.createElement(
              _,
              null,
              r.a.createElement(
                T.b,
                { className: "logo-container", to: "/" },
                r.a.createElement(I.a, { fontSize: "50px", className: "logo" })
              ),
              r.a.createElement(
                "div",
                { className: "options" },
                r.a.createElement(
                  T.b,
                  { to: "/shop", className: "option" },
                  "SHOP"
                ),
                r.a.createElement(
                  T.b,
                  { to: "/contact", className: "option" },
                  "CONTACT"
                ),
                n
                  ? r.a.createElement(
                      "div",
                      {
                        className: "option",
                        style: { color: "#524763" },
                        onClick: function() {
                          return A.signOut();
                        }
                      },
                      "SIGN OUT"
                    )
                  : r.a.createElement(
                      T.b,
                      { className: "option", to: "/login" },
                      "SIGN IN"
                    )
              )
            )
          );
        },
        _ = Object(u.b)("header")(L()),
        F = t(16);
      function H() {
        var e = Object(m.a)([
          "\n  position: relative;\n  margin: 45px 0;\n\n  .form-input {\n    background: none;\n    background-color: white;\n    color: ",
          ";\n    font-size: 18px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid ",
          ";\n    margin: 25px 0;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus ~ .form-input-label {\n      ",
          '\n    }\n  }\n\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n\n  .form-input-label {\n    color: ',
          ";\n    font-size: 16px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 300ms ease all;\n\n    &.shrink {\n      ",
          "\n    }\n  }\n"
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      var V = function(e) {
          var n = e.handleChange,
            t = e.label,
            a = Object(d.a)(e, ["handleChange", "label"]);
          return r.a.createElement(
            q,
            null,
            r.a.createElement(
              "input",
              Object.assign({ className: "form-input", onChange: n }, a)
            ),
            t
              ? r.a.createElement(
                  "label",
                  {
                    className: "".concat(
                      a.value && a.value.length ? "shrink" : "",
                      " form-input-label"
                    )
                  },
                  t
                )
              : null
          );
        },
        q = Object(u.b)("div")(
          H(),
          function(e) {
            return e.theme.black;
          },
          function(e) {
            return e.theme.black;
          },
          function(e) {
            return e.theme.shrinkLabel();
          },
          function(e) {
            return e.theme.black;
          },
          function(e) {
            return e.theme.shrinkLabel();
          }
        );
      function Y() {
        var e = Object(m.a)([
          "\n  /* min-width: 165px; */\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: ",
          ";\n  color: white;\n  text-transform: uppercase;\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
          ";\n    color: black;\n    border: 1px solid black;\n  }\n\n  &.google-sign-in {\n    background-color: ",
          ";\n  }\n"
        ]);
        return (
          (Y = function() {
            return e;
          }),
          e
        );
      }
      var Z = function(e) {
          var n = e.children,
            t = e.isGoogleSignIn,
            a = Object(d.a)(e, ["children", "isGoogleSignIn"]);
          return r.a.createElement(
            Q,
            Object.assign(
              { className: "".concat(t ? "google-sign-in" : "") },
              a
            ),
            n
          );
        },
        Q = Object(u.b)("button")(
          Y(),
          function(e) {
            return e.theme.black;
          },
          function(e) {
            return e.theme.white;
          },
          function(e) {
            return e.theme.green;
          }
        );
      function X() {
        var e = Object(m.a)([
          "\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n\n  .title {\n    margin: 10px 0;\n  }\n\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n"
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      var $ = function() {
          var e = Object(a.useState)({ email: "", password: "" }),
            n = Object(p.a)(e, 2),
            t = n[0],
            i = n[1],
            c = function(e) {
              var n = e.target,
                a = n.value,
                r = n.name;
              i(Object(s.a)({}, t, Object(F.a)({}, r, a)));
            };
          return r.a.createElement(
            ee,
            null,
            r.a.createElement("h2", null, "I already have an account"),
            r.a.createElement(
              "span",
              null,
              "Sign in with your email and password"
            ),
            r.a.createElement(
              "form",
              {
                onSubmit: function(e) {
                  var n, a;
                  return l.a.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              e.preventDefault(),
                              (n = t.email),
                              (a = t.password),
                              (r.prev = 2),
                              (r.next = 5),
                              l.a.awrap(A.signInWithEmailAndPassword(n, a))
                            );
                          case 5:
                            i({ email: "", password: "" }), (r.next = 11);
                            break;
                          case 8:
                            (r.prev = 8),
                              (r.t0 = r.catch(2)),
                              console.log(r.t0);
                          case 11:
                            i({ email: "", password: "" });
                          case 12:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    null,
                    [[2, 8]]
                  );
                }
              },
              r.a.createElement(V, {
                handleChange: c,
                name: "email",
                type: "email",
                label: "Email",
                value: t.email,
                required: !0
              }),
              r.a.createElement(V, {
                handleChange: c,
                name: "password",
                type: "password",
                label: "Password",
                value: t.password,
                required: !0
              }),
              r.a.createElement(
                "div",
                { className: "buttons" },
                r.a.createElement(Z, { buttonType: "submit" }, "Sign In"),
                r.a.createElement(
                  Z,
                  { onClick: K, isGoogleSignIn: !0 },
                  "Sign In With Google"
                )
              )
            )
          );
        },
        ee = Object(u.b)("div")(X());
      function ne() {
        var e = Object(m.a)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  .title {\n    /* margin: 10px 0; */\n  }\n"
        ]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      var te = function() {
          var e = Object(a.useState)({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: ""
            }),
            n = Object(p.a)(e, 2),
            t = n[0],
            i = n[1],
            c = function(e) {
              var n = e.target,
                a = n.value,
                r = n.name;
              i(Object(s.a)({}, t, Object(F.a)({}, r, a)));
            };
          return r.a.createElement(
            ae,
            null,
            r.a.createElement(
              "h2",
              { className: "title" },
              "I don't have an account"
            ),
            r.a.createElement(
              "span",
              null,
              "Sign up with your email and password"
            ),
            r.a.createElement(
              "form",
              {
                className: "sign-up-form",
                onSubmit: function(e) {
                  var n, a, r, c, o, s;
                  return l.a.async(
                    function(p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              (e.preventDefault(),
                              (n = t.displayName),
                              (a = t.email),
                              (r = t.password),
                              (c = t.confirmPassword),
                              r === c)
                            ) {
                              p.next = 5;
                              break;
                            }
                            return (
                              alert("password do not match"), p.abrupt("return")
                            );
                          case 5:
                            return (
                              (p.prev = 5),
                              (p.next = 8),
                              l.a.awrap(A.createUserWithEmailAndPassword(a, r))
                            );
                          case 8:
                            return (
                              (o = p.sent),
                              (s = o.user),
                              (p.next = 12),
                              l.a.awrap(G(s, { displayName: n }))
                            );
                          case 12:
                            i({
                              displayName: "",
                              email: "",
                              password: "",
                              confirmPassword: ""
                            }),
                              (p.next = 18);
                            break;
                          case 15:
                            (p.prev = 15),
                              (p.t0 = p.catch(5)),
                              console.log(p.t0);
                          case 18:
                          case "end":
                            return p.stop();
                        }
                    },
                    null,
                    null,
                    [[5, 15]]
                  );
                }
              },
              r.a.createElement(V, {
                type: "text",
                name: "displayName",
                value: t.displayName,
                handleChange: c,
                label: "Display Name",
                required: !0
              }),
              r.a.createElement(V, {
                type: "email",
                name: "email",
                value: t.email,
                handleChange: c,
                label: "Email",
                required: !0
              }),
              r.a.createElement(V, {
                type: "password",
                name: "password",
                value: t.password,
                handleChange: c,
                label: "Password",
                required: !0
              }),
              r.a.createElement(V, {
                type: "password",
                name: "confirmPassword",
                value: t.confirmPassword,
                handleChange: c,
                label: "Confirm Password",
                required: !0
              }),
              r.a.createElement(Z, { buttonType: "submit" }, "Submit")
            )
          );
        },
        ae = Object(u.b)("div")(ne());
      function re() {
        var e = Object(m.a)([
          "\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n"
        ]);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      var ie = function() {
          return r.a.createElement(
            ce,
            null,
            r.a.createElement($, null),
            r.a.createElement(te, null)
          );
        },
        ce = Object(u.b)("div")(re()),
        oe = t(36),
        le =
          (t(58),
          {
            purple: "#524763",
            teal: "#82d8d8",
            green: "#cbe56c",
            black: "#333",
            grey: "#d8d8d8",
            white: "#fff",
            shrinkLabel: function() {
              return "\n      top: -14px;\n      font-size: 12px;\n      color: black ;\n  ";
            }
          });
      c.a.render(
        r.a.createElement(
          T.a,
          null,
          r.a.createElement(function() {
            var e = Object(a.useState)({ currentUser: null }),
              n = Object(p.a)(e, 2),
              t = n[0],
              i = n[1];
            return (
              Object(a.useEffect)(function() {
                var e = A.onAuthStateChanged(function(e) {
                  var n;
                  return l.a.async(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((console.log("fired"), !e)) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 4), l.a.awrap(G(e));
                        case 4:
                          (n = t.sent) &&
                            n.onSnapshot(function(e) {
                              i({
                                currentUser: Object(s.a)({ id: e.id }, e.data())
                              });
                            }),
                            (t.next = 9);
                          break;
                        case 8:
                          i({ currentUser: e });
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  });
                });
                return function() {
                  e();
                };
              }, []),
              Object(a.useEffect)(
                function() {
                  console.log(t);
                },
                [t]
              ),
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  oe.Helmet,
                  null,
                  r.a.createElement("meta", {
                    name: "description",
                    content:
                      "Where people come to find custom keyboards and parts"
                  }),
                  r.a.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon.png",
                    sizes: "16x16"
                  }),
                  r.a.createElement("title", null, "Keeb Kraze")
                ),
                r.a.createElement(R, { currentUser: t }),
                r.a.createElement(
                  b.c,
                  null,
                  r.a.createElement(
                    u.a,
                    { theme: le },
                    r.a.createElement(b.a, {
                      exact: !0,
                      path: "/",
                      component: y
                    }),
                    r.a.createElement(b.a, { path: "/shop", component: P }),
                    r.a.createElement(b.a, { path: "/login", component: ie })
                  )
                )
              )
            );
          }, null)
        ),
        document.getElementById("root")
      );
    }
  },
  [[40, 1, 2]]
]);
//# sourceMappingURL=main.3439dd2f.chunk.js.map
