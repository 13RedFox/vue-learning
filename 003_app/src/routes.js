import VueRouter from "vue-router";
import Home from "./components/Home";
// import Cars from "./components/Cars";
import Car from "./components/Car";
import CarFull from "./components/CarFull";
import ErrorCmp from "./components/Error";

const Cars = resolve => {
  require.ensure(['./components/Cars.vue'],() => {
    resolve(
      require('./components/Cars')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home,
    },
    {
      path: "/cars",
      component: Cars,
      name: "cars",
    },
    {
      path: "/car/:id",
      component: Car,
      children: [
        {
          path: "full",
          component: CarFull,
          name: "carFull",
          beforeEnter(to, from, next) {
            console.log("beforeEnter");
            next();
          },
        },
      ],
    },
    {
      path: "/none",
      redirect: {
        name: "cars",
      },
    },
    {
      path: "*",
      component: ErrorCmp,
    },
  ],
  mode: "history",
  scrollBehavior(to, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    return {
      x: 0,
      y: 0,
    };
  },
});
