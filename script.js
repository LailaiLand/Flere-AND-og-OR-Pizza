        //model
        let infoDiv = 'Gjør ett valg på hver linje:';
        let valgBunn = '';
        let valgFyll = '';
        let valgStrl = '';
        let valgVariant = '';
        let bestillKlar = 'disabled';

        //view
        //onchange: kjør funksjon, endre innhold i variabel, value til view
        //inputnavn: $variabel== er den "tykk"? if so "checked", else : '""'.
        //Da trenger du ikke navn, for du endrer til check eller uncheck via velgFunksjon('sammenligningForCheckEllerIkke')
        showContent();
        function showContent() {
            let html = /*html*/` <p>Ferdighet 9f - Valgsetninger - Sammenligne flere ting på en gang (og og eller sammen)</p>
            <h3>Pizza-bestilling</h3>
            <div style="padding-bottom: 20px;">${infoDiv}</div>
      
            Bunn: 
            <input type="radio"onchange="velgBunn('tykk')" ${valgBunn == "tykk" ? "checked" : ""}/>Tykk
            <input type="radio" onchange="velgBunn('tynn')" ${valgBunn == "tynn" ? "checked" : ""}/>Tynn 
            <input type="radio" onchange="velgBunn('ost')" ${valgBunn == "ost" ? "checked" : ""}/>Cheeze Crust! <br />
        
            Fyll: 
            <input type="radio" onchange="velgFyll('taco')" ${valgFyll == "taco" ? "checked" : ""} />Taco
            <input type="radio" onchange="velgFyll('kylling')" ${valgFyll == "kylling" ? "checked" : ""}  />Kylling
            <input type="radio" onchange="velgFyll('pepperoni')" ${valgFyll == "pepperoni" ? "checked" : ""}  />Pepperoni<br />
        
            Størrelse: 
            <input type="radio" onchange="velgStrl('stor')" ${valgStrl == 'stor' ? "checked" : ""} />Stor
            <input type="radio" onchange="velgStrl('middels')" ${valgStrl == 'middels' ? "checked" : ""} />Middels
            <input type="radio" onchange="velgStrl('liten')" ${valgStrl == 'liten' ? "checked" : ""} />Liten<br />

            Variant:
            <input type="radio" onchange="velgVariant('deep')" ${valgVariant == 'deep' ? "checked" : ""} />Deep dish
            <input type="radio" onchange="velgVariant('not')" ${valgVariant == 'not' ? "checked" : ""} />Kjedlig ufritert </br>
        
            <button ${bestillKlar} onclick="alert('Bestilt!');">Bestill</button>
          
            `;
            document.getElementById('content').innerHTML = html;
        }

        //controller
        console.log(bestillKlar)

        function info() {
            if (valgBunn == 'ost' && valgFyll && valgStrl && valgVariant == 'deep') {
                infoDiv = 'Du har fylt ut alt og er klar til å bestille!';
                bestillKlar = '';
            } else {
                infoDiv = 'Du har ikke valgt:';
                if (!valgBunn) {
                    infoDiv += '<li>bunn</li>';
                }
                if (!valgFyll) {
                    infoDiv += '<li>fyll</li>';
                }
                if (!valgStrl) {
                    infoDiv += '<li>størrelse</li>';
                }
                if (!valgVariant) {
                    infoDiv += '<li>perfection</li>';
                }
            }
            correct();
            showContent();
        }
        
        function correct(){
        if (valgFyll && valgStrl && valgBunn && valgVariant && (valgBunn != 'ost' || valgVariant != 'deep')){
            infoDiv += '<li>det riktige</li>';
            bestillKlar = 'disabled';
        }
    }

        function velgBunn(bunnvalg){
            valgBunn = bunnvalg;
            console.log(valgBunn);
            info();
            showContent();
        }
        
        function velgFyll(fyllvalg){
            valgFyll = fyllvalg;
            console.log(valgFyll);
            info();
            showContent();
        }
        
        function velgStrl(strlvalg){
            valgStrl = strlvalg;
            console.log(valgStrl);
            info();
            showContent();
        }
        
        function velgVariant(variantvalg){
            valgVariant = variantvalg;
            console.log(valgVariant);
            info();
            showContent();
        }