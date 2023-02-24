import './stylesheets/formulario.css'
export function Formulario() {
  return (<div className="card-custom">
      <div className="form-container">
        <div id="login">
          <h2>Login</h2>
        </div>
        <form className="form-custom">
          <label>Email</label>
          <input type="email" id="email" className="input-custom" name="email" placeholder="Correo electrónico" required />
            <label>Contraseña</label>
            <input type="password" id="password" className="input-custom" name="password" placeholder="Contraseña" required />
            <a href='#'>¿Haz olvidado la contraseña?</a>
            <button type="button" id="auth">Entrar</button>
        </form>
      </div>
  </div> );
}