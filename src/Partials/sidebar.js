import React from 'react'
import './design.css'
function Sidebar() {
    return (
        <div>
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
      </div>
                </div>
            </nav>
        </div>
    )
}
 export default Sidebar