const initialState = {
  patients: [],
  students: [
    {
      name: "Shelly Trabajo",
      city: "New Delhi",
      school: "DPS RK-puram , New Delhi",
      Class: "12th",
      problem: "Monetary Issue",
      description:
        "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
      phone: "9876543210",
      whatsapp: "9876543210",
      instagram: "213lkjas",
    },
    {
      name: "Shelly Trabajo",
      city: "New Delhi",
      school: "DPS RK-puram , New Delhi",
      Class: "12th",
      problem: "Monetary Issue",
      description:
        "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
      phone: "9876543210",
      whatsapp: "9876543210",
      instagram: "213lkjas",
    },
    {
      name: "Shelly Trabajo",
      city: "New Delhi",
      school: "DPS RK-puram , New Delhi",
      Class: "12th",
      problem: "Monetary Issue",
      description:
        "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
      phone: "9876543210",
      whatsapp: "9876543210",
      instagram: "213lkjas",
    },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "HELP_ME_LIST":
      return {
        ...state,
        ...payload,
      };
    case "ADD_PATIENT":
      console.log(state);
      const { patients } = state;
      patients.push(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
