(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(A,e,s){},21:function(A,e,s){},42:function(A,e,s){"use strict";s.r(e);var C=s(2),g=s.n(C),c=s(14),a=s.n(c),Q=(s(20),s(15)),B=s(5),t=(s(21),s.p+"static/media/baixo.8ae0f394.gif"),o=s(0);var i=function(){var A=Object(C.useState)({}),e=Object(B.a)(A,2),g=e[0],c=e[1],a=Object(C.useState)({}),i=Object(B.a)(a,2),j=i[0],E=i[1];return Object(C.useEffect)((function(){s(23).get("https://api.covid19api.com/summary").then((function(A){var e=A.data.Global;c(e);var s,C=A.data.Countries,g=0,a={},B=Object(Q.a)(C);try{for(B.s();!(s=B.n()).done;){var t=s.value;if(("Brazil"===t.Country||"Argentina"===t.Country||"Colombia"===t.Country||"Chile"===t.Country||"Bolivia"===t.Country)&&(g++,a[t.Country]=t,5===g))break}}catch(o){B.e(o)}finally{B.f()}a!=={}&&E(a)}))}),[]),Object(o.jsx)("div",{children:j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("nav",{children:[Object(o.jsx)("a",{href:"#dados",children:Object(o.jsx)("p",{children:"Mundo"})}),Object(o.jsx)("a",{href:"#paises",children:Object(o.jsx)("p",{children:"Am\xe9rica do Sul"})})]}),Object(o.jsxs)("div",{className:"global-div",children:[Object(o.jsx)("div",{className:"tittle",children:Object(o.jsx)("h1",{children:"Dados do Covid-19 pelo Mundo "})}),Object(o.jsx)("div",{className:"scroll",children:Object(o.jsx)("a",{href:"#dados",children:Object(o.jsx)("img",{width:"80px",src:t,alt:"botao"})})})]}),Object(o.jsx)("div",{id:"dados",children:g?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"dados-mundo",children:[Object(o.jsx)("h1",{children:" Covid-19 no Mundo"}),Object(o.jsxs)("div",{className:"opcoes",id:"casos",children:[Object(o.jsxs)("h3",{children:["Casos Novos: ",g.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",g.TotalConfirmed]})]}),Object(o.jsxs)("div",{className:"opcoes",id:"mortes",children:[Object(o.jsxs)("h3",{children:["Novas Mortes: ",g.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",g.TotalDeaths]})]}),Object(o.jsxs)("div",{className:"opcoes",id:"recuperados",children:[Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",g.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",g.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{})}),Object(o.jsxs)("div",{id:"paises",children:[Object(o.jsx)("h1",{children:" Pa\xedses da Am\xe9rica do Sul"}),Object(o.jsxs)("div",{className:"menu-paises",children:[Object(o.jsx)("a",{href:"#cartao-argentina",children:Object(o.jsxs)("div",{className:"pais",id:"argentina",children:[Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUeSURBVHhe7dpNjuREEAbQAYSEEIfgGCyQOAILttz/GlA11Zbd1a5w2i7bmRnvSVbN32I6Ir+MTHd/AwAAAAAA6NQPH58c67+Pzzs1b4hmrTMs9NK6TYPxTO0boEnlosU+NdS05N+rf+U0qExpOLbQg4ppzrIjwzHQh0ppTOyMcAz0okKa8tqZ4RjoR2U05LUrAjLQl0poxLwrwzHQmwpowmtCggYEagjIM/06mYK/VmNABvp2EoV+reaATOnhgRR3XivhmNLLAyjqvBYDMtDTN1LMz1oOxhz93UkBR72FY6DHOyjeQ6/hGOzp87Q26daLgPQfjsGWXs/VJtWa+fHjE5692jiybCjfCUgOTgobCQgEBKR/R0yPNMcsAenb1nAsBSDNkU1AICAgTN0nR6q3VEsEpN/jwtqvSzBmpDlLLuh1cZT0d+3XnmrNCIidc41060VAHoRkWcq14g5CibQbqQnyYILMS78+BEQ4XrE2brIXQTi+EowJdxCmhOOJgDAQjhkCAoHMu4b7x8j0eMEEQTgCWQNielAk4+4hHCPTY4EjVl7CUUBAchKOQgKSj3CsICAQyLabZL+gmx4rZSxY1pAIxwaOWBAQEAgICAQyBsRZnGIZA+JHTSjmNW8OpuZG7iA5mJobCUgOJshGAgKBTAFxzGA1EwQCmQLiHM5qJggEsgXEFGEVE6R/NoUdMgbEgqGYCdI3m8FOWQNi4VDEBOmbb47uJCAQyBwQxywWmSAQyL6LZjqjm5gbmCB5uLBvICC5CMlKApKPkKwgIDkJSSEBgUDmNxuZd1FvtAqZIBAwQXIzSRaYILnZJBYICEISEBAIZA6I8zeLTBBsFIHMAXH2ZlHW3UM4HkyPBY5YeQlHgYxFMj2Eo5gJAgEBgYCA5ON4tULWYmW9hwjHSgKSg2Bs5IjVP+HYwQTpk1C8SeZC9hYSoTiAgLRJGE6SvdAthEQYLmSCtEFILpL1LVbvl3TexGteCAhI/RyvLiQgEMgYEPcPipkg9RPoC2UMiDM9xTIultZ2ZIG+UNbitxIS4biYCVIv4aiAgFxjWvfn/49gVERAriEEjfAW6xrTkLZy5Esp605W46I0VSrkG4X1MEkqJCB1EZLKZA2I4wxFTBAICEhdTLbKeItVD+GokIBcTzAq5oh1LeGonIBcRzga4DUvBDJPECFhkSMWBLIHxBQhZIJAQECuYXI1QkAgICB2cwICcj6BbIhmnftzWerdGA17ODIkatwwzRsdERL1bZw7yMhi5guLYvTuCaK2HTBBICAgIzs+X1gUI5d0vtDA0VnfD1HzhmjWZ0LCJ+4g1zgriOwkIBAQkJFdnS+chT9zB+ETjRqdPUHUvgGOWNcQjkZo1MOZ00PNG2KCnEs4GqNho6OniFo3yAQ5h3A0SkAgICDHMz0aJiAQEJAHP2bCLAGBgICYHgQE5Fgu6I0TkOMIRwc08f1HLDXtiAkCAQGBgIA4EhEQkPcSts5o6Ohdl3U17YgJMhoW9t4F7huPHbHbvbZnoatrJ0yQY5ginbDTxfYudPVtnAYuE5LENK/Mq5AM9Vv6e2DiHpi9k4cKuKQfS0gaJyDAJe7T48/HL2mVS+QxpkcrNW6Y5h1j7u6h1g3StOMISQdc0s91D839+fn776ieHe04cxPkmfpXzgS51j1E/358Dm+8/ro9/9yeP27Pb/c/gB4Nx6k1z0+35+/b8+vtga79cnvmQvD8/P7xCQAAAAAAAABQtW/f/geVyZBGHomeywAAAABJRU5ErkJggg==",alt:"argentina",width:"50px"}),Object(o.jsx)("p",{children:"Argentina"})]})}),Object(o.jsx)("a",{href:"#cartao-bolivia",children:Object(o.jsxs)("div",{className:"pais",id:"bolivia",children:[Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS0SURBVHhe7dwJjhpXFIbRzrCBYglZR/a/LaeJ6IgghhrecO+tcyTLlhLJBfXx98ON/dvXOfy6/fzOWZ6L0qrexDUBPyPq5CrdwL0R3xN0clVuYIuYf4g6sew3r2XIPwSdWNab1yPke6JO6vfbz5n0jpnEMi3RyJAtdFIZbtyMRRZ0UpFv3MyjhaCTinqGdk5ml2hLFCVkC51UlBsXbZEFndTsGxf1aCHopGbduOhnZEEnNfLGZXqjJ+ikNv8px2VZ/vr+6Rrnsx+P3v23yLJdLzd7lugsN9tKJ5Txsxzw0p6gLRdhWWhKETSlHDk+nOHNoeNVMhaaUo4ukJUmFAtNKS3Wx0oTRouFdrMJw5FjHZ/tSKLlujp6MF3rGyRqpnLk2O7XZVn+vP2aYHqszZnOm9Y6GAt9jDeLwfRamLPeaIs9maD7EfcEgh5D3IMIejxxdyToucTdmKDjEHcDPZ5EMR8j7AMEHZu4NxJ0DsJeyXcKczASK7V+5Xvi+7PWbwg6L2E/Iej8hH1H0HUI+5ug6zl12C0fvJhjOlXggj6nspELmlJxC5ofJcJu9Z1CMed3/dvsf9x+nVarV6Wg60i91D7LwaPU4yRonkkbtaApRdC8knKlBU0pgqYUQVOKoHkn3Tla0JQiaEoRNKW0CNrnOAjDQlOKoClF0JQiaEoRNKUImlIETSmCphRBU4qgKUXQlCJoShE0pQiaT1J9mvJo0D46SigWmlIEzRppvhILmlIEzVopVvrovwXsTeE5hf03pAVNKyEiP3IRYuaILi8AZ2hm6TKIgmam5lELmtmaRr03aOdnQrLQlCJoStkTtOMGYVloShE0szX9BsvWoB03aOqyLE1HdeurQ9D00GylHTmIoNlQbnllWGd6O7zUFppIDo+moInmUNTeFBLVruOHhSaqXeO551VgpRlpU6MWmug2DeieoA//0Qr0YqEp5cjaOksz0qpWLTSlCJpSjgTtzSHhWGhKabGy3hwyysdeLTSltAjaWZowLDSlCJoshn5jxbGDECw0pbQM2koznYWmFEFTiqDJYPVxtnXQztFMZaEpRdCUImii23SM7RG0czTTWGhK6bWmPvSfy5EOet/rTdcm6PPKcO83X2OvB3Ul6ph63vNHRxsQNE+NjPiVPT0Imv+JEPKjtV3sunZ/ylHTNYaIMV91va7eD9pKjxc15Gc+9bH5sVjoWjLFfNX8ei10HdlifvTYyq7HY6GJ4j7g3S/OEa9qK91f9nVuxkLnJ+Y7gqYUQVOKoHNz3HgwImhPOsNY6LwMxROCphRBU8qooH15ZAgLTSmCzslXvBcETSkjg7YqdGehKUXQlDI6aMcOurLQlCJoSpkRtGMH3VjofAzCG4KmlFlBWxm6sNC5GIIPBE0ps1/x/hGa9azzCoKOT8gbCHqMT8/zq+dBzBtFeMJGR/3uMbe+FkEOVv1N4TWoxx/vrP3/ProsizfcExy+cQ30WOjWj2vPNUZ4bk+nYtA9H9PaaxXzJJW+LF4j6h2SUIOrEvTI0D79XqKfKMqTv/fYMfP6X12zoCfKvNCzw3n2+4t5sqxBRwnnv+u4LMvft1/Cv65fwtf8COc7ZsscwtfXP/mnfwBt1GkQAAAAAElFTkSuQmCC",alt:"bolivia",width:"50px"}),Object(o.jsx)("p",{children:"Bol\xedvia"})]})}),Object(o.jsx)("a",{href:"#cartao-brasil",children:Object(o.jsxs)("div",{className:"pais",id:"brasil",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"brasil",width:"50px"}),Object(o.jsx)("p",{children:"Brasil"})]})}),Object(o.jsx)("a",{href:"#cartao-chile",children:Object(o.jsxs)("div",{className:"pais",id:"chile",children:[Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATkSURBVHhe7d3BjuQ0EAbggRlWCxdu3HgG3v/RkHYHEnXPZSSKbadsl93fJ0WJkLi48rvsuEf7Qkm/Hdc/ny4m+Ol+p5b/CoR6DWbA6/m/bqFmA/18vzPfn8f1I0spy62BzEZ1PPriq90AOkgNLV3h/H+EpDMBWdv7cb3eHulBQGq40gm+Hdevt0eyadF1XN18vx3X99sjWQSkjoyvU+qZzBILAgKyD92jAwGBgIBAQEAgICD7yPgKxicCAgEB2YsukkxAICAgEBAQCAgIBPw8oY4eG2z1vUgH2ZuvWhcJSA1e5KIEZH/Cd4GA7M8+5AIBgYCA7E33uEhAICAgEBCQfVleJRCQPQlHEgNZQ9ZZhXomM6DzCUdhllgQEBAICAgEBAQCAgIBAYGAgEBAQCAgIHP5a7/iBGQPTtE7ERAICMj6dI+OBGQe+48FCMjadI/OBAQCArIutRtAi54jY/+hdgOYhdb0er/TmVlonitdRN0G0UEgICBzOANZhIBAQEDG0z0WIiAQEJD1+II1kICM5wVfiICsRbgGExAICAgEBAQCAgIBAVmLQ8bBBAQCAgIB39XH89eEC9FBICAgEBAQCAgIBARkLOcYixEQCAgIBARkPV/udwZw4DTOOdbvt8dL1Gwggz1O1gZdzQayxBrD16tFCQgEBAQC1rP9ZS6v1GswHQQCAgIBLbsvy6vF6SBrEI5JBKSPr8flYHADBr8PS6tN6CAQEBAICAgEBAQCAgIBAanPT+UnEhAICAgEBAQCAlLf6/3OBH7G0IefmmzC4PeTERL1mcwSqw+fZjdhhsqXFQ61KUAHgYCAQEBAarK8KkJActmcb0ZAICAgEBAQCAgIBAQkl/HcjM+JuZyib8aMBwEBqcl5ShECUpMlVhECUo+/ICzETJUrY2mkJoUoRp7MfYO6FGGJBQEBqclXrCIEBAICUpM9SBECksdLvSEBySMgGxKQHOfh3vvtMcW5SbdRL8Csl6Pny6xGE+kgEBAQCAgIBAQEAgICAQGpzResyQTkOucVGxOQa97u9x50jwIU4RoHhJvTQdp5gZ+AgLT5clyZv72iKLNgmxEbc7UpQAd5nK9WT0RAHmdmfyICUpO6FKEQNVnGFWG50K7XS6wmhShGnqzAqEkhipFDODZlDwIBM9Y12fsQ9ShGB2lz/tTEl6YnYMZq0zMcalKIYjxOOJ6IJdbjvMRPREDqELyCBKQG/3BnUWatdpl7EXUoSgeZTzgKExAImL3aZC2vjH9xOggEBAQCAtLG0uhJCMhc517m4/rj/A/UYiZsl3kO8kE9ilGQNj3C8UFNCrHEgoCA1KJ7FCMgbbzIT0JA2gnJExCQdj036hRhFmw3MiDqNImBbzezg6jbIAb6mirLLHXsxMBeJyQbs0nfh48GHQgIBAQEAgJynbX/xgQEAgICAQGBgIDk+Ot+ZzM2mHnOsXy/PU6jnsl0kDwO6jYkILnM4JsRkHxv9zsbMOP1M3pPopYd6CD92JNswKzT1+gu8pn6XqSD9HV2kd9vj1PoYheZYcaa8cJ+Pa6/b488SkDGmjWjnysF3aSBgIw360VV6wYGbQ4hWYQBm+9c/ny/PXan3g8yYLX07Cz2IQ185q3l9X7P9stxCUcDHaSmzJdZjS8wePW1hkVtExjEtfxIWNQ0zcvLv27fZw/5WsWoAAAAAElFTkSuQmCC",alt:"chile",width:"50px"}),Object(o.jsx)("p",{children:"Chile"})]})}),Object(o.jsx)("a",{href:"#cartao-colombia",children:Object(o.jsxs)("div",{className:"pais",id:"colombia",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"colombia",width:"50px"}),Object(o.jsx)("p",{children:"Col\xf4mbia"})]})})]}),Object(o.jsxs)("div",{className:"div-cartao-paises",children:[console.log(j),j.Argentina?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartao-paises",id:"cartao-argentina",children:[Object(o.jsx)("h1",{children:"Argentina"}),Object(o.jsxs)("div",{className:"cartao",children:[Object(o.jsxs)("h3",{children:["Novos Casos: ",j.Argentina.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",j.Argentina.TotalConfirmed]}),Object(o.jsxs)("h3",{children:["Novas Mortes: ",j.Argentina.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",j.Argentina.TotalDeaths]}),Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",j.Argentina.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",j.Argentina.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{}),j.Brazil?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartao-paises",id:"cartao-brasil",children:[Object(o.jsx)("h1",{children:"Brasil"}),Object(o.jsxs)("div",{className:"cartao",children:[Object(o.jsxs)("h3",{children:["Novos Casos: ",j.Brazil.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",j.Brazil.TotalConfirmed]}),Object(o.jsxs)("h3",{children:["Novas Mortes: ",j.Brazil.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",j.Brazil.TotalDeaths]}),Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",j.Brazil.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",j.Brazil.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{}),j.Bolivia?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartao-paises",id:"cartao-bolivia",children:[Object(o.jsx)("h1",{children:"Bolivia"}),Object(o.jsxs)("div",{className:"cartao",children:[Object(o.jsxs)("h3",{children:["Novos Casos: ",j.Bolivia.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",j.Bolivia.TotalConfirmed]}),Object(o.jsxs)("h3",{children:["Novas Mortes: ",j.Bolivia.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",j.Bolivia.TotalDeaths]}),Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",j.Bolivia.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",j.Bolivia.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{}),j.Chile?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartao-paises",id:"cartao-chile",children:[Object(o.jsx)("h1",{children:"Chile"}),Object(o.jsxs)("div",{className:"cartao",children:[Object(o.jsxs)("h3",{children:["Novos Casos: ",j.Chile.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",j.Chile.TotalConfirmed]}),Object(o.jsxs)("h3",{children:["Novas Mortes: ",j.Chile.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",j.Chile.TotalDeaths]}),Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",j.Chile.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",j.Chile.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{}),j.Colombia?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartao-paises",id:"cartao-colombia",children:[Object(o.jsx)("h1",{children:"Colombia"}),Object(o.jsxs)("div",{className:"cartao",children:[Object(o.jsxs)("h3",{children:["Novos Casos: ",j.Colombia.NewConfirmed]}),Object(o.jsxs)("h3",{children:["Casos Totais: ",j.Colombia.TotalConfirmed]}),Object(o.jsxs)("h3",{children:["Novas Mortes: ",j.Colombia.NewDeaths]}),Object(o.jsxs)("h3",{children:["Mortes Totais: ",j.Colombia.TotalDeaths]}),Object(o.jsxs)("h3",{children:["Novas Recupera\xe7\xf5es: ",j.Colombia.NewRecovered]}),Object(o.jsxs)("h3",{children:["Recupera\xe7\xf5es Totais: ",j.Colombia.TotalRecovered]})]})]})}):Object(o.jsx)(o.Fragment,{})]})]}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"\xa9 Copyright 2001-2020 Copyright.com.br - All Rights Reserved - Legal"})})]}):Object(o.jsx)(o.Fragment,{})})};a.a.render(Object(o.jsx)(g.a.StrictMode,{children:Object(o.jsx)(i,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b366f752.chunk.js.map