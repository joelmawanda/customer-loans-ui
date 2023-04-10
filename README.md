# Customer-Loans-Admin-Interface
This is a simple, restricted admin interface that provides a view of the customer-loans APIs performance i.e. number of requests, number of failed validations, number of positive requests (at least one loan) and number of negative requests (zero outstanding loans).

# Getting started
This admin interface was developed using react js and the reasons are:- React is flexible, has a great developer experience, it has facebook's support/resources, it has a broad community, great perfomance and it is easy to test.
# Prerequisites
  •	Docker
# Clone the repository
git clone https://github.com/joelmawanda/customer-loans-ui.git
# Run the application
  1. **Docker build -t app .**
  2. **Docker run -p 8080:8080 app**
# Verify the application is running:
Once the container is running, verify that the application is running by opening a web browser and navigating to **`http://localhost:8080`** or by using a tool such     as `curl`

## License
This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.





