import BarChart from "../../../components/admin/chart/BarChart";
import PieChart from "../../../components/admin/chart/PieChart";
import LineChart from "../../../components/admin/chart/lineChart";
import Chart from "../../../components/admin/chart/Char";
import "./dashboardAdmin.css"

                                                                                                                                                                                                                                                                                                                                                                
function Dashboard(){
    return(
        <section className="adminDashboard">
<h1>Dashboard</h1>
<div className="first-chart">
<LineChart/>
<BarChart/>
<PieChart/>
</div>
<Chart />
</section>

    )
}
export default Dashboard;