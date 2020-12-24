import "./contato.css";

function Contato() {
  return (
    <div id="contato">
      <h1>Contato</h1>

      <div className="infos">
        <div className="contact">
          <h6>Telefone</h6>
          <p>(31) 99637-3183</p>
          <h6 className="social">Social</h6>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="horario">
          <h6>Horário de Funcionamento</h6>
          <p>seg: Fechado</p>
          <p>ter: Fechado</p>
          <p>qua: Fechado</p>
          <p>qui: Fechado</p>
          <p>sex: 09:00 - 16:00</p>
          <p>sab: 09:00 - 12:00</p>
          <p>dom: Fechado</p>
        </div>

        <div className="endereco">
          <h6>Endereço</h6>
          <p>Rua Alaska, 72 Jardim Canadá <br/> Nova Lima - MG <br/> 34.007-718</p>
        </div>

        <div className="embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14990.917085660054!2d-43.98788196622315!3d-20.061779394996442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd83732e182fc7677!2sMUDAS%20DE%20HORTALI%C3%87AS!5e0!3m2!1spt-BR!2sbr!4v1592666562308!5m2!1spt-BR!2sbr" width="322" height="306" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="maps"></iframe>
        </div>
      </div>

      <div className="copyright">
        © 2020 Copyright: <a href="/">Canadá Hostaliças</a>
        / Made by <a href="https://github.com/diasmatheus05">Matheus Dias</a>
      </div>
    </div>
  )
}

export default Contato;