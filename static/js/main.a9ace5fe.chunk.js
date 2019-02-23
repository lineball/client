(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    17: function(n, e, t) {
      n.exports = t(29);
    },
    22: function(n, e, t) {},
    29: function(n, e, t) {
      'use strict';
      t.r(e);
      var o = t(0),
        i = t.n(o),
        r = t(3),
        a = t.n(r),
        c = (t(22), t(5)),
        u = t(1),
        s = t(4),
        l = t(7),
        d = t(2),
        p = function n(e) {
          Object(l.a)(this, n), (this.position = void 0), (this.position = e);
        },
        f = function n(e) {
          var t = e.position;
          Object(l.a)(this, n), (this.position = void 0), (this.position = t);
        },
        m = {
          nodes: [],
          edges: [],
          size: { x: 0, y: 0 },
          addEdge: function(n) {
            return console.log(n);
          },
          position: { x: 45, y: 60 }
        },
        x = Object(o.createContext)(m),
        v = function(n) {
          var e = Object(o.useState)(!1),
            t = Object(s.a)(e, 2),
            r = t[0],
            a = t[1],
            c = n.position,
            u = c.x,
            l = c.y;
          return i.a.createElement(x.Consumer, null, function(n) {
            var e = n.addEdge,
              t = n.position,
              o = t.x === u && t.y === l;
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement('circle', {
                onClick: function() {
                  return e({ x: u, y: l });
                },
                r: '4',
                fill: 'transparent',
                cx: u,
                cy: l,
                onMouseEnter: function() {
                  return a(!0);
                },
                onMouseLeave: function() {
                  return a(!1);
                }
              }),
              i.a.createElement('circle', {
                pointerEvents: 'none',
                cx: u,
                cy: l,
                r: r || o ? '2' : '0.5',
                fill: o ? 'red' : 'white'
              })
            );
          });
        },
        y = function(n) {
          return i.a.createElement(x.Consumer, null, function(n) {
            var e = n.nodes,
              t = n.edges,
              o = n.size,
              r = o.x,
              a = o.y;
            return i.a.createElement(
              'svg',
              {
                width: 50 * r,
                height: 50 * (a + 1),
                viewBox: '0 0 '.concat(10 * r, ' ').concat(10 * a)
              },
              t.map(function(n) {
                return i.a.createElement('line', {
                  pointerEvents: 'none',
                  x1: n.position[0].x,
                  y1: n.position[0].y,
                  x2: n.position[1].x,
                  y2: n.position[1].y,
                  stroke: 'white'
                });
              }),
              e.map(function(n) {
                return i.a.createElement(
                  v,
                  Object.assign({}, n, {
                    key: ''.concat(n.position.x, '_').concat(n.position.y)
                  })
                );
              })
            );
          });
        };
      y.defaultProps = { size: { x: 3, y: 5 } };
      var g = y,
        E = function() {
          var n = Object(o.useState)(
              (function(n) {
                var e = n.x,
                  t = n.y,
                  o = n.addEdge;
                return Object(c.a)({}, m, {
                  nodes: Object(d.flatMap)(
                    [].concat(
                      Object(u.a)(
                        [0, 12].map(function(n) {
                          return Object(d.range)(3, 6).map(function(e) {
                            return new f({
                              position: { x: 10 * e + 5, y: 10 * n }
                            });
                          });
                        })
                      ),
                      Object(u.a)(
                        Object(d.range)(1, 12).map(function(n) {
                          return Object(d.range)(0, 9).map(function(e) {
                            return new f({
                              position: { x: 10 * e + 5, y: 10 * n }
                            });
                          });
                        })
                      )
                    )
                  ),
                  size: { x: e, y: t },
                  addEdge: o
                });
              })({
                x: 9,
                y: 12,
                addEdge: function(n) {
                  var e = n.x,
                    t = n.y;
                  return r(function(n) {
                    console.log(n.position);
                    var o = [].concat(Object(u.a)(n.edges), [
                      new p([n.position, { x: e, y: t }])
                    ]);
                    return Object(
                      c.a
                    )({}, n, { edges: o, position: { x: e, y: t } });
                  });
                }
              })
            ),
            e = Object(s.a)(n, 2),
            t = e[0],
            r = e[1];
          return i.a.createElement(
            x.Provider,
            { value: t },
            i.a.createElement(g, null)
          );
        },
        b = t(12);
      function w() {
        var n = Object(b.a)(['\n  max-width: 960px;\n  margin: auto;\n']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      var h = t(13).a.div(w()),
        j = function() {
          return i.a.createElement(h, null, i.a.createElement(E, null));
        };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a.a.render(i.a.createElement(j, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(n) {
            n.unregister();
          });
    }
  },
  [[17, 1, 2]]
]);
//# sourceMappingURL=main.a9ace5fe.chunk.js.map
