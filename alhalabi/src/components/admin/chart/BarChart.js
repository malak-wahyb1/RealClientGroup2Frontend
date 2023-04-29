import "./chart.css";
import PeopleIcon from "@mui/icons-material/People";
import LoopIcon from '@mui/icons-material/Loop';
import DoneIcon from '@mui/icons-material/Done';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
function CardDash() {
  return (
    <div class="all-card">
      <div class="card_dash">
        <div class="col">
          <p class="card-title text-title">Customer</p>
          <h2 class="card-text text-amount">350,897</h2>
        </div>
        <div class="col-auto">
          <div class="icon-shape icon-area">
            <i class="fa fa-area-chart" aria-hidden="true">
              <PeopleIcon />
            </i>
          </div>
        </div>
      </div>

      <div class="card_dash">
        <div class="col">
          <p class="card-title text-title">Order</p>
          <h2 class="card-text text-amount">2,356</h2>
        </div>
        <div class="col-auto">
          <div class="icon-shape icon-pie">
            <i class="fa fa-pie-chart" aria-hidden="true">
             <DoneIcon/>
            </i>
          </div>
        </div>
      </div>

      <div class="card_dash">
        <div class="col">
          <p class="card-title text-title">Order in progress</p>
          <h2 class="card-text text-amount">924</h2>
        </div>
        <div class="col-auto">
          <div class="icon-shape icon-user">
            <i class="fa fa-users" aria-hidden="true">
              <LoopIcon/>
            </i>
          </div>
        </div>
      </div>

      <div class="card_dash">
        <div class="col">
          <p class="card-title text-title">order on the way</p>
          <h2 class="card-text text-amount">49,65%</h2>
        </div>
        <div class="col-auto">
          <div class="icon-shape icon-percent">
            <i class="fa fa-percent" aria-hidden="true">
<DeliveryDiningIcon/>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardDash;
