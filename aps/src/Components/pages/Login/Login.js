import { Toast } from 'bootstrap';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Login.css'

class Login extends Component {State
    constructor(props) {
        super(props);
        this.state = { email : '', password : '', redirect: null  };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fallo = this.fallo.bind(this);
    }


    render() { 

        if(this.state.redirect) return <Redirect to ={this.state.redirect} />
        return ( 

            <div className='cent'>
                <svg className='waves' width="100%" height="100%" id="svg" viewBox="0 0 1440 700" xmlns="http:www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc44"></stop><stop offset="95%" stop-color="#32ded444"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,140 0,140 C 38.23892178633112,115.81586479151247 76.47784357266224,91.63172958302492 116,103 C 155.52215642733776,114.36827041697508 196.3275474956822,161.28894645941278 239,174 C 281.6724525043178,186.71105354058722 326.21196644460895,165.21248457932398 361,143 C 395.78803355539105,120.78751542067603 420.824586725882,97.86111522329138 457,92 C 493.175413274118,86.13888477670862 540.4896866518628,97.3430545275105 583,110 C 625.5103133481372,122.6569454724895 663.2166666666666,136.76666666666668 703,147 C 742.7833333333334,157.23333333333332 784.6436466814705,163.59027880582283 822,150 C 859.3563533185295,136.40972119417717 892.2087466074513,102.87221811004193 937,93 C 981.7912533925487,83.12778188995807 1038.5213668887245,96.9208487540094 1089,112 C 1139.4786331112755,127.0791512459906 1183.705785837651,143.44438687392054 1220,148 C 1256.294214162349,152.55561312607946 1284.6554897606711,145.30160375030843 1320,142 C 1355.3445102393289,138.69839624969157 1397.6722551196644,139.34919812484577 1440,140 C 1440,140 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc66"></stop><stop offset="95%" stop-color="#32ded466"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,280 0,280 C 45.907413312076514,272.63574465258404 91.81482662415303,265.2714893051681 135,264 C 178.18517337584697,262.7285106948319 218.64810681546436,267.54978743191174 257,280 C 295.35189318453564,292.45021256808826 331.5927461139896,312.52936096718486 372,321 C 412.4072538860104,329.47063903281514 456.9809087285771,326.332768699349 500,308 C 543.0190912714229,289.667231300651 584.4836189717018,256.13956423541913 617,252 C 649.5163810282982,247.86043576458084 673.0846153846153,273.1089743589743 706,282 C 738.9153846153847,290.8910256410257 781.1779194898365,283.42453832868347 827,290 C 872.8220805101635,296.57546167131653 922.2037066560384,317.192872326292 963,322 C 1003.7962933439616,326.807127673708 1036.0072538860102,315.80397236614857 1076,292 C 1115.9927461139898,268.19602763385143 1163.7672777999203,231.59123820911384 1203,237 C 1242.2327222000797,242.40876179088616 1272.9236349143086,289.83107479739607 1311,304 C 1349.0763650856914,318.16892520260393 1394.5381825428458,299.084462601302 1440,280 C 1440,280 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,420 0,420 C 47.81517394522575,427.2832185086071 95.6303478904515,434.56643701721424 130,436 C 164.3696521095485,437.43356298278576 185.29378238341968,433.0174704397503 225,427 C 264.7062176165803,420.9825295602497 323.19452257586977,413.36368122378474 370,400 C 416.80547742413023,386.63631877621526 451.9281273131014,367.52780466511047 491,381 C 530.0718726868986,394.47219533488953 573.0929681717247,440.5251001157736 617,447 C 660.9070318282753,453.4748998842264 705.6999999999999,420.3717948717949 735,426 C 764.3000000000001,431.6282051282051 778.1070318282755,475.98772039704676 819,470 C 859.8929681717245,464.01227960295324 927.8718726868984,407.6773235400178 974,381 C 1020.1281273131016,354.3226764599822 1044.4054774241304,357.3029854428818 1074,367 C 1103.5945225758696,376.6970145571182 1138.5062176165802,393.11073468845484 1180,397 C 1221.4937823834198,400.88926531154516 1269.5696521095485,392.25407580329863 1314,394 C 1358.4303478904515,395.74592419670137 1399.2151739452256,407.8729620983507 1440,420 C 1440,420 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,560 0,560 C 29.614055115868595,544.9973599802615 59.22811023173719,529.9947199605231 97,528 C 134.7718897682628,526.0052800394769 180.70161418891985,537.0184801381693 226,560 C 271.29838581108015,582.9815198618307 315.96543301258333,617.9313594867999 356,611 C 396.03456698741667,604.0686405132001 431.43665376074694,555.2560819146311 469,552 C 506.56334623925306,548.7439180853689 546.2879519444288,591.0443128546756 587,606 C 627.7120480555712,620.9556871453244 669.4115384615384,608.5666666666667 714,592 C 758.5884615384616,575.4333333333333 806.0658942094177,554.6890204786578 841,558 C 875.9341057905823,561.3109795213422 898.3248847007912,588.6772514187021 939,606 C 979.6751152992088,623.3227485812979 1038.634566987417,630.6019738465334 1088,611 C 1137.365433012583,591.3980261534666 1177.1368473495415,544.914853195164 1216,543 C 1254.8631526504585,541.085146804836 1292.8180436144166,583.7386133728103 1330,594 C 1367.1819563855834,604.2613866271897 1403.5909781927917,582.1306933135949 1440,560 C 1440,560 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 350)"></path></svg>

                <div className='login__main'>
                    <main className='form-signin text-center'>

                        <form  className='Formulario' onSubmit={this.handleSubmit}>
                            <img className='mb-4 ' width='72' height='57' src='https:ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529' alt='Logotipo APS'></img>
                            <h1 className='h3 mb-3 fw-normal'>Iniciar Sesión</h1>
                                <div class="form-floating form__campo">
                                    <input required type="email" name="email" class="form-control" id="email" onChange={this.handleInputChange}></input>
                                    <label for="email">Direccion de Correo</label>
                                </div>
                                <div class="form-floating form__campo">
                                    <input required type="password" name="password" class="form-control" id="password" onChange={this.handleInputChange}></input>
                                    <label for="password">Contraseña</label>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary login__boton"  type='submit' value='Submit'>Iniciar Sesión</button>
                                
                                <p className='login__register'>No tienes cuenta? <Link to='#'><span className='createAcc'>Registrate</span></Link></p>
                                

                        </form>
                    </main>this.props.
                </div>
            </div>
         );
    }

    

    fallo(a){
        if(a){
            alert('Credenciales incorrectas, vuelva a intentarlo por favor');
        }

    }
    async handleSubmit(event) {
        event.preventDefault();

        const carga = JSON.stringify(this.state);
        const respuesta = await fetch('http://localhost:8000/fetch/fetchLogin.php', {
                method: "POST",
                body: carga
            })
            .catch(err => console.log(err.data));

        const exitoso = await respuesta.json();
        if (exitoso[0] == 'loggedIn') {
            
            this.setState({redirect : '/'})
        } else {
            this.fallo(true);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }



}
 
export default Login;