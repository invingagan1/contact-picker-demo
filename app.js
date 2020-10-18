
var App = {
  propertiesBtn: null,
  selectBtn: null,
  init() {
    console.log("app started");
    // this.initEvents();
    if (this.isContactSelectApiAvailable()) {
      (document.querySelector("#support")).style.display = "block";
    } else {
      (document.querySelector("#not_support")).style.display = "block";
    }
  },
  isContactSelectApiAvailable() {
    return ('contacts' in navigator && 'ContactsManager' in window);
  },
  initEvents() {

    this.propertiesBtn = document.querySelector("#properties");
    this.selectBtn = document.querySelector("#select");
    this.propertiesBtn.addEventListener("click", this.loadProperties.bind(this));

    this.selectBtn.addEventListener("click", this.selectContacts.bind(this));

  },
  loadProperties(event) {

    console.log("load properties");
  },
  selectContacts(event) {
    console.log("select contacts");
    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };
    navigator.contacts.select(props, opts).then(console.log).catch(console.error)
  }
};

window.onload = App.init.bind(App);