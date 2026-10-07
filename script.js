const pontos = 999
const anos_cliente = 6

if (pontos<=90  && anos_cliente<=2) {
  console.log ("Bronze")
    } else if (pontos>=90 && pontos<=400  && anos_cliente<=5  && anos_cliente>=1) {
         console.log ("Prata")
    } else if (pontos>=400 && pontos<=999  && anos_cliente<=8  && anos_cliente>=5) {
         console.log ("Ouro")
    } else if (pontos>=999 && anos_cliente<=10 && anos_cliente>=8 ) {
         console.log ("Diamante")
    }
