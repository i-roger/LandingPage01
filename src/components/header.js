export default function Header(){
    return(
        <header className="main">
          <div className="center">
            <div className="menu">
              <div className="logo">
                <h1> Roger.Code </h1>
              </div>
              <div className="item-menu">
                <a href="#">Login</a>
              </div>
            </div>
              <div className="form">
                <h2>ENTRE EM CONTATO!</h2>
                <form>
                  <div className="items-form">
                    <input placeholder="Seu Nome" type="text"/>
                    <input placeholder="Email@email.com.br" type="text"/>
                    <input placeholder="Cel. (XX) XXXX-XXXX" type="text"/>
                    <input placeholder="Tel. (XX) XXXX-XXXX" type="text"/>
                    <input placeholder="Seu nome..." type="submit"/>
                  </div>
                </form>
              </div>
        </div>
      </header>
    );
}