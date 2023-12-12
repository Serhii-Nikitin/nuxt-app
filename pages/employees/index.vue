<template>
  <h1 class="pb-5">Employees</h1>

  <div class="border-success">
    <form @submit.prevent="createEmployee()">
      <div class="mb-1">
        <label for="exampleInputFirstName" class="form-label">First Name</label>
        <input
          v-model="newEmployee.first_name"
          type="text"
          class="form-control"
          id="exampleInputFirstName"
        />
      </div>
      <div class="mb-1">
        <label for="exampleInputLastName" class="form-label">Last Name</label>
        <input
          v-model="newEmployee.last_name"
          type="text"
          class="form-control"
          id="exampleInputLastName"
        />
      </div>
      <div class="mb-1">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="newEmployee.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-1">
        <label for="exampleInputGender" class="form-label">Gender</label>
        <input
          v-model="newEmployee.gender"
          type="text"
          class="form-control"
          id="exampleInputGender"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <table class="table">
    <thead>
      <tr class="table-primary">
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, i) in employees" :key="i">
        <th
          scope="row"
          v-for="[key, value] in Object.entries(employee)"
          :key="key"
        >
          {{ value }}
        </th>
        <th>
          <div class="d-flex justify-content-around">
            <button @click="editEmployee(employee)">
              <BootstrapIconPencilFill />
            </button>
            <button @click="deleteEmployee(employee)">
              <BootstrapIconTrashFill />
            </button>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const newEmployee = ref({
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
});
let employees = ref([]);

const getAllEmployees = () =>
  fetch("http://localhost:5001/api/employee")
    .then((res) => res.json())
    .then((data) => {
      employees.value = data;
    })
    .catch((err) => console.log(err));

getAllEmployees();

const createEmployee = async () => {
  try {
    const res = await fetch(`http://localhost:5001/api/employee/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee.value),
    });
    const data = await res.json();
    employees.value = [data, ...employees.value];
  } catch (error) {
    console.log(error);
  }
};

const editEmployee = async (employee) => {
  try {
    const res = await fetch("http://localhost:5001/api/employee", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...employee,
        first_name: "Vasya",
        last_name: "Pupkin",
      }),
    });
    await res.json();
    getAllEmployees();
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee = async (employee) => {
  try {
    const res = await fetch(
      `http://localhost:5001/api/employee/${employee.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await res.json();
    getAllEmployees();
  } catch (error) {
    console.log(error);
  }
};
</script>

<styles scoped>

</styles>
