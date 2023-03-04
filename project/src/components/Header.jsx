import React from 'react'

function Header() {
  return (
    <div className="header-container">
        <div className="collection-heading">
            Board
        </div>        
        <div class="btn-container">
          <i class="fa fa-sun-o" aria-hidden="true"></i>
            <label class="switch btn-color-mode-switch">
                <input type="checkbox" name="color_mode" id="color_mode" value="1"></input>
                <label for="color_mode" data-on="Dark" data-off="Light" class="btn-color-mode-switch-inner"></label>
            </label>
          <i class="fa fa-moon-o" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Header