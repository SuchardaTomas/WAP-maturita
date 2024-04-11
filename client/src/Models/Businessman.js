export const getAllBusinessmen = async () => {
    const req = await fetch("http://localhost:3000/businessmen", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload,
    };
  };
  
  export const getBusinessmanById = async (id) => {
    const req = await fetch(`http://localhost:3000/businessmen/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload,
    };
  };
  
  export const createBusinessman = async (formData) => {
    console.log(formData);
    const req = await fetch(`http://localhost:3000/businessmen`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload,
    };
  };
  
  export const updateBusinessman = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/businessmen/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload,
    };
  };
  
  export const deleteBusinessman = async (id) => {
    const req = await fetch(`http://localhost:3000/businessmen/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      status: req.status,
      msg: data.msg,
      payload: data.payload,
    };
  };
  