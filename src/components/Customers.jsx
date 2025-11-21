import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { 
  FaEdit, 
  FaTimes, 
  FaCheck, 
  FaSearch, 
  FaArrowLeft, 
  FaShoppingCart,
  FaCalendarAlt,
  FaTicketAlt,
  FaBox,
  FaRupeeSign,
  FaListAlt,
  FaPlay,
  FaEye
} from "react-icons/fa";

const Customers = () => {
  const navigate = useNavigate();

  // 🔹 Enhanced customer data with detailed MPL information
  const [customers, setCustomers] = useState([
    {
      id: 13,
      name: "Santosh Kumar",
      phone: "7842188838",
      email: "santosh@yopmail.com",
      status: "Active",
      gender: "Male",
      dob: "1990-05-14",
      address: "Hyderabad, India",
      registeredOn: "2024-02-10",
      referralCode: "REF1234",
      lastLogin: "2025-11-05 10:15 AM",
      totalOrders: 5,
      mpl: "yes,2products",
      schemeCount: 2,
      
      // Enhanced MPL Products data
      mplProducts: [
        {
          id: "MPL-5001",
          user: "Santosh Kumar",
          product: "Mobile Screen Protection",
          pricePlan: "Gold",
          visitsCompleted: 1,
          visitsPending: 0,
          validity: "2026-02-18",
          status: "Active",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          purchaseDate: "2025-10-02",
          amount: "₹1,499",
          category: "Mobile Protection",
          serviceType: "Annual Maintenance"
        },
        {
          id: "MPL-5002",
          user: "Santosh Kumar",
          product: "Laptop Hardware Cover",
          pricePlan: "Platinum",
          visitsCompleted: 2,
          visitsPending: 1,
          validity: "2026-05-15",
          status: "Active",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          purchaseDate: "2025-10-12",
          amount: "₹3,999",
          category: "Laptop Maintenance",
          serviceType: "Comprehensive Cover"
        },
        {
          id: "MPL-5003",
          user: "Santosh Kumar",
          product: "Home Appliance Service",
          pricePlan: "Silver",
          visitsCompleted: 0,
          visitsPending: 2,
          validity: "2025-12-30",
          status: "Pending",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          purchaseDate: "2025-11-01",
          amount: "₹2,499",
          category: "Home Appliances",
          serviceType: "Quarterly Service"
        }
      ],
      
      // Detailed schemes data
      schemes: [
        { 
          id: "SCH001", 
          name: "Monthly Savings Plan", 
          type: "Monthly",
          amount: 5000, 
          startDate: "2025-01-02",
          endDate: "2025-12-02",
          nextDueDate: "2025-11-02",
          totalAmount: "₹60,000",
          paidAmount: "₹50,000",
          balanceAmount: "₹10,000",
          monthsPaid: 10,
          totalMonths: 12,
          status: "Active"
        },
        { 
          id: "SCH002", 
          name: "Weekly Investment", 
          type: "Weekly",
          amount: 1000, 
          startDate: "2025-02-01",
          endDate: "2025-08-01",
          nextDueDate: "2025-11-08",
          totalAmount: "₹24,000",
          paidAmount: "₹18,000",
          balanceAmount: "₹6,000",
          monthsPaid: 6,
          totalMonths: 8,
          status: "Active"
        },
      ],
      
      // Detailed orders data
      orders: [
        { 
          id: 101, 
          date: "2025-10-02", 
          amount: 250, 
          method: "UPI", 
          wallet: "myWallet",
          products: ["Samsung Galaxy S24", "Phone Case"],
          status: "Delivered"
        },
        { 
          id: 102, 
          date: "2025-10-12", 
          amount: 150, 
          method: "myWallet", 
          wallet: "myWallet",
          products: ["Wireless Earbuds"],
          status: "Delivered"
        },
      ],
      
      // Luck Draw Tickets data
      luckDrawTickets: [
        {
          id: "LDT001",
          ticketNumber: "LD-2025-001",
          drawName: "Diwali Special Draw",
          purchaseDate: "2025-10-20",
          amount: "₹100",
          drawDate: "2025-11-15",
          announcedDate: "2025-11-16",
          status: "Active",
          result: "Pending"
        }
      ],
      
      // ECB Tickets data
      ecbTickets: [
        {
          id: "ECB001",
          ticketNumber: "ECB-2025-001",
          eventName: "India vs Australia - T20 Match",
          purchaseDate: "2025-10-28",
          amount: "₹500",
          eventDate: "2025-11-20",
          venue: "Hyderabad Stadium",
          seatNumber: "A-25",
          status: "Confirmed"
        }
      ],
      
      // Products data
      products: [
        {
          id: "PROD001",
          name: "Mobile Charger",
          category: "Electronics",
          purchaseDate: "2025-11-01",
          amount: "₹899",
          status: "In Transit",
          expectedDelivery: "2025-11-05"
        }
      ],
      
      wallets: {
        myWallet: {
          balance: 850,
          transactions: [
            { date: "2025-11-01", type: "Credit", amount: 200, balanceAfter: 850, description: "Wallet Top-up" },
            { date: "2025-11-03", type: "Debit", amount: 50, balanceAfter: 650, description: "Product Purchase" }
          ]
        },
        cashbackWallet: {
          balance: 120,
          transactions: [
            { date: "2025-11-01", type: "Credit", amount: 100, balanceAfter: 120, description: "Cashback Reward" }
          ]
        },
        schemeWallet: {
          balance: 900,
          transactions: [
            { date: "2025-10-22", type: "Debit", amount: 100, balanceAfter: 900, description: "Ticket Purchase" }
          ]
        }
      }
    },

    {
      id: 12,
      name: "Naidu Velaga",
      phone: "9573344275",
      email: "naidu@yopmail.com",
      status: "Active",
      gender: "Male",
      dob: "1992-08-22",
      address: "Vijayawada, India",
      registeredOn: "2023-11-12",
      referralCode: "",
      lastLogin: "2025-11-01 08:10 AM",
      totalOrders: 3,
      mpl: "yes,1product",
      schemeCount: 1,
      
      // MPL Products for second customer
      mplProducts: [
        {
          id: "MPL-5004",
          user: "Naidu Velaga",
          product: "AC Annual Maintenance",
          pricePlan: "Premium",
          visitsCompleted: 3,
          visitsPending: 0,
          validity: "2026-03-20",
          status: "Active",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          purchaseDate: "2025-09-15",
          amount: "₹5,999",
          category: "Air Conditioner",
          serviceType: "Annual Contract"
        }
      ],
      
      schemes: [
        { 
          id: "SCH003", 
          name: "Daily Savings", 
          type: "Daily",
          amount: 100, 
          startDate: "2025-02-10",
          endDate: "2025-05-10",
          nextDueDate: "2025-11-06",
          totalAmount: "₹9,000",
          paidAmount: "₹6,000",
          balanceAmount: "₹3,000",
          monthsPaid: 2,
          totalMonths: 3,
          status: "Active"
        }
      ],
      
      orders: [
        { 
          id: 201, 
          date: "2025-09-15", 
          amount: 1500, 
          method: "UPI", 
          wallet: "myWallet",
          products: ["Smart Watch"],
          status: "Delivered"
        }
      ],
      
      luckDrawTickets: [],
      ecbTickets: [],
      products: [
        {
          id: "PROD003",
          name: "Smart Watch",
          category: "Wearables",
          purchaseDate: "2025-09-15",
          amount: "₹4,999",
          status: "Delivered",
          deliveryDate: "2025-09-18"
        }
      ],
      
      wallets: {
        myWallet: { balance: 200, transactions: [] },
        cashbackWallet: { balance: 50, transactions: [] },
        schemeWallet: { balance: 400, transactions: [] },
      }
    }
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMplProduct, setSelectedMplProduct] = useState(null);

  // UI states
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSchemes, setShowSchemes] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showWalletHistory, setShowWalletHistory] = useState(false);
  const [showMplProducts, setShowMplProducts] = useState(false);
  const [showLuckDraw, setShowLuckDraw] = useState(false);
  const [showEcbTickets, setShowEcbTickets] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showMplDetails, setShowMplDetails] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [activeWallet, setActiveWallet] = useState(null);

  const [confirmType, setConfirmType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowEdit(true);
  };

  const handleConfirm = (customer, type) => {
    setSelectedCustomer(customer);
    setConfirmType(type);
    setShowConfirm(true);
  };

  const handleStatusChange = () => {
    if (!selectedCustomer) return;

    setCustomers((prev) =>
      prev.map((cust) =>
        cust.id === selectedCustomer.id
          ? { ...cust, status: confirmType === "activate" ? "Active" : "Inactive" }
          : cust
      )
    );

    setSelectedCustomer((prev) =>
      prev ? { ...prev, status: confirmType === "activate" ? "Active" : "Inactive" } : prev
    );

    setShowConfirm(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();

    if (term === "") {
      setSearchResults([]);
      setNotFound(false);
      return;
    }

    const lower = term.toLowerCase();

    const matches = customers.filter((cust) => {
      const nameMatch = cust.name.toLowerCase().includes(lower);
      const phoneMatch = cust.phone.includes(term);
      const idMatch = String(cust.id).includes(term);
      return nameMatch || phoneMatch || idMatch;
    });

    if (matches.length === 0) {
      setSearchResults([]);
      setNotFound(true);
    } else {
      setSearchResults(matches);
      setNotFound(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setNotFound(false);
  };

  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleMplProductClick = (product) => {
    setSelectedMplProduct(product);
    setShowMplDetails(true);
  };

  const handlePlayVideo = (product) => {
    setSelectedMplProduct(product);
    setShowVideo(true);
  };

  const displayCustomers = searchResults.length > 0 ? searchResults : customers;

  return (
    <div className="container mt-4">
      {/* Title + Search Bar */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="mb-0 text-danger fw-bold">Customers</h3>

        <form
          className="d-flex align-items-center"
          onSubmit={handleSearch}
          style={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            height: "42px",
            width: "360px",
          }}
        >
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search customers by name, id or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              boxShadow: "none",
              padding: "8px 12px",
              fontSize: "15px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#ffc107",
              border: "none",
              width: "45px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            title="Search"
          >
            <FaSearch color="white" size={16} />
          </button>
        </form>
      </div>

      {/* If customer selected -> details page */}
      {selectedCustomer ? (
        <Card className="shadow-lg p-4">
          <Card.Title className="text-danger fw-bold mb-3">Customer Details</Card.Title>
          <Card.Body>
            <h5 className="fw-bold text-secondary mb-3">Basic Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2"><strong>Name:</strong> {selectedCustomer.name}</div>
              <div className="col-md-6 mb-2"><strong>Mobile:</strong> {selectedCustomer.phone}</div>
              <div className="col-md-6 mb-2"><strong>Email:</strong> {selectedCustomer.email}</div>
              <div className="col-md-6 mb-2"><strong>Gender:</strong> {selectedCustomer.gender}</div>
              <div className="col-md-6 mb-2"><strong>Date of Birth:</strong> {selectedCustomer.dob}</div>
              <div className="col-md-6 mb-2"><strong>Address:</strong> {selectedCustomer.address}</div>
              <div className="col-md-6 mb-2"><strong>Registration Date:</strong> {selectedCustomer.registeredOn}</div>
              <div className="col-md-6 mb-2"><strong>Referral Code:</strong> {selectedCustomer.referralCode || "N/A"}</div>
            </div>

            <hr />

            <h5 className="fw-bold text-secondary mb-3">Activity Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong>Last Login Time:</strong> {selectedCustomer.lastLogin}
              </div>

              {/* Clickable Total Orders */}
              <div className="col-md-6 mb-2">
                <strong>Total Orders / Transactions:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowOrders(true)}
                >
                  {selectedCustomer.totalOrders} <FaShoppingCart />
                </span>
              </div>

              {/* Clickable MPL Products */}
              <div className="col-md-6 mb-2">
                <strong>MPL Products:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowMplProducts(true)}
                >
                  {selectedCustomer.mplProducts?.length || 0} Active <FaBox />
                </span>
              </div>

              {/* Clickable Schemes */}
              <div className="col-md-6 mb-2">
                <strong>No. of Schemes:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowSchemes(true)}
                >
                  {selectedCustomer.schemeCount} <FaCalendarAlt />
                </span>
              </div>

              {/* Clickable Luck Draw */}
              <div className="col-md-6 mb-2">
                <strong>Luck Draw Tickets:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowLuckDraw(true)}
                >
                  {selectedCustomer.luckDrawTickets?.length || 0} <FaTicketAlt />
                </span>
              </div>

              {/* Clickable ECB Tickets */}
              <div className="col-md-6 mb-2">
                <strong>ECB Tickets:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowEcbTickets(true)}
                >
                  {selectedCustomer.ecbTickets?.length || 0} <FaTicketAlt />
                </span>
              </div>

              {/* Clickable Products */}
              <div className="col-md-6 mb-2">
                <strong>Products Purchased:</strong>{" "}
                <span 
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setShowProducts(true)}
                >
                  {selectedCustomer.products?.length || 0} <FaListAlt />
                </span>
              </div>

              <div className="col-md-6 mb-2">
                <strong>Account Status:</strong>{" "}
                <span
                  className={`badge ${
                    selectedCustomer.status === "Active" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {selectedCustomer.status}
                </span>
              </div>
            </div>

            {/* Wallet Section */}
            <hr />
            <h5 className="fw-bold text-secondary mb-3">Wallets</h5>

            <div className="row">
              {/* My Wallet */}
              <div
                className="col-md-4 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActiveWallet("myWallet");
                  setShowWalletHistory(true);
                }}
              >
                <strong>My Wallet:</strong>{" "}
                <span className="text-info fw-bold">
                  ₹{selectedCustomer.wallets?.myWallet.balance}
                </span>
              </div>

              {/* Cashback Wallet */}
              <div
                className="col-md-4 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActiveWallet("cashbackWallet");
                  setShowWalletHistory(true);
                }}
              >
                <strong>Cashback Wallet:</strong>{" "}
                <span className="text-info fw-bold">
                  ₹{selectedCustomer.wallets?.cashbackWallet.balance}
                </span>
              </div>

              {/* Scheme Wallet */}
              <div
                className="col-md-4 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActiveWallet("schemeWallet");
                  setShowWalletHistory(true);
                }}
              >
                <strong>Scheme Wallet:</strong>{" "}
                <span className="text-info fw-bold">
                  ₹{selectedCustomer.wallets?.schemeWallet.balance}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4">
              <Button variant="warning" className="me-2 text-white" onClick={() => handleEdit(selectedCustomer)}>
                <FaEdit /> Edit
              </Button>

              {selectedCustomer.status === "Active" ? (
                <Button variant="danger" onClick={() => handleConfirm(selectedCustomer, "deactivate")}>
                  <FaTimes /> Deactivate
                </Button>
              ) : (
                <Button variant="success" onClick={() => handleConfirm(selectedCustomer, "activate")}>
                  <FaCheck /> Activate
                </Button>
              )}

              <Button variant="secondary" className="ms-2" onClick={() => setSelectedCustomer(null)}>
                <FaArrowLeft /> Back to List
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <>
          {notFound && (
            <Card className="shadow-sm p-4 text-center border-danger mb-4">
              <h5 className="text-danger fw-bold">No customer found</h5>
              <p className="text-muted">Try searching again with a valid name, phone number or ID.</p>
              <Button variant="secondary" onClick={handleClearSearch}>Back to List</Button>
            </Card>
          )}

          {!notFound && (
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-0">
                <table className="table table-striped mb-0 align-middle custom-table">
                  <thead className="custom-thead">
                    <tr>
                      <th>Customer ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {displayCustomers.map((customer) => (
                      <tr key={customer.id} style={{ cursor: "pointer" }} onClick={() => handleRowClick(customer)}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>
                          <span
                            className={`badge ${
                              customer.status === "Active" ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>

                        <td>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2 text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(customer);
                            }}
                          >
                            <FaEdit />
                          </Button>

                          {customer.status === "Active" ? (
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleConfirm(customer, "deactivate");
                              }}
                            >
                              <FaTimes />
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleConfirm(customer, "activate");
                              }}
                            >
                              <FaCheck />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {searchResults.length > 0 && (
                <div className="p-3 border-top d-flex justify-content-between align-items-center">
                  <div>{searchResults.length} result(s) found</div>
                  <Button variant="secondary" size="sm" onClick={handleClearSearch}>
                    <FaArrowLeft /> Back to List
                  </Button>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* ---------------------- MPL PRODUCTS MODAL ---------------------- */}
      <Modal show={showMplProducts} onHide={() => setShowMplProducts(false)} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            MPL Products - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.mplProducts?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No MPL products found for this customer.</p>
            </div>
          )}

          {selectedCustomer?.mplProducts?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>MPL ID</th>
                    <th>Product</th>
                    <th>Price Plan</th>
                    <th>Visits Completed</th>
                    <th>Visits Pending</th>
                    <th>Validity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.mplProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="fw-bold">{product.id}</td>
                      <td>
                        <div className="fw-bold">{product.product}</div>
                        <small className="text-muted">{product.category}</small>
                      </td>
                      <td>
                        <span className={`badge ${
                          product.pricePlan === 'Platinum' ? 'bg-dark' :
                          product.pricePlan === 'Gold' ? 'bg-warning' :
                          product.pricePlan === 'Premium' ? 'bg-info' : 'bg-secondary'
                        }`}>
                          {product.pricePlan}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-success">{product.visitsCompleted}</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">{product.visitsPending}</span>
                      </td>
                      <td>{product.validity}</td>
                      <td>
                        <span className={`badge ${
                          product.status === 'Active' ? 'bg-success' : 'bg-warning'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <Button
                            variant="info"
                            size="sm"
                            onClick={() => handleMplProductClick(product)}
                            title="View Details"
                          >
                            <FaEye />
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handlePlayVideo(product)}
                            title="Play Video"
                          >
                            <FaPlay />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMplProducts(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- MPL PRODUCT DETAILS MODAL ---------------------- */}
      <Modal show={showMplDetails} onHide={() => setShowMplDetails(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            MPL Product Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedMplProduct && (
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <strong>MPL ID:</strong>
                  <div className="fw-bold text-primary">{selectedMplProduct.id}</div>
                </div>
                <div className="mb-3">
                  <strong>Product:</strong>
                  <div className="fw-bold">{selectedMplProduct.product}</div>
                </div>
                <div className="mb-3">
                  <strong>Category:</strong>
                  <div>{selectedMplProduct.category}</div>
                </div>
                <div className="mb-3">
                  <strong>Service Type:</strong>
                  <div>{selectedMplProduct.serviceType}</div>
                </div>
                <div className="mb-3">
                  <strong>Price Plan:</strong>
                  <div>
                    <span className={`badge ${
                      selectedMplProduct.pricePlan === 'Platinum' ? 'bg-dark' :
                      selectedMplProduct.pricePlan === 'Gold' ? 'bg-warning' :
                      selectedMplProduct.pricePlan === 'Premium' ? 'bg-info' : 'bg-secondary'
                    }`}>
                      {selectedMplProduct.pricePlan}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <strong>Purchase Date:</strong>
                  <div>{selectedMplProduct.purchaseDate}</div>
                </div>
                <div className="mb-3">
                  <strong>Amount:</strong>
                  <div className="fw-bold text-success">{selectedMplProduct.amount}</div>
                </div>
                <div className="mb-3">
                  <strong>Validity:</strong>
                  <div className="fw-bold">{selectedMplProduct.validity}</div>
                </div>
                <div className="mb-3">
                  <strong>Visits:</strong>
                  <div>
                    <span className="badge bg-success me-2">Completed: {selectedMplProduct.visitsCompleted}</span>
                    <span className="badge bg-warning">Pending: {selectedMplProduct.visitsPending}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <strong>Status:</strong>
                  <div>
                    <span className={`badge ${
                      selectedMplProduct.status === 'Active' ? 'bg-success' : 'bg-warning'
                    }`}>
                      {selectedMplProduct.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMplDetails(false)}>Close</Button>
          <Button variant="primary" onClick={() => {
            setShowMplDetails(false);
            handlePlayVideo(selectedMplProduct);
          }}>
            <FaPlay /> Play Video
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- MPL VIDEO MODAL ---------------------- */}
      <Modal show={showVideo} onHide={() => setShowVideo(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            Service Video - {selectedMplProduct?.product}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedMplProduct && (
            <div className="text-center">
              <video 
                controls 
                style={{ width: '100%', maxHeight: '400px' }}
                poster="https://via.placeholder.com/800x450?text=MPL+Service+Video"
              >
                <source src={selectedMplProduct.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-3">
                <strong>Product:</strong> {selectedMplProduct.product}<br />
                <strong>MPL ID:</strong> {selectedMplProduct.id}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowVideo(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- EDIT MODAL ---------------------- */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">Edit Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer && (
            <Form>
              <div className="row g-3">
                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control defaultValue={selectedCustomer.name.split(" ")[0]} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control defaultValue={selectedCustomer.name.split(" ")[1] || ""} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control disabled defaultValue={selectedCustomer.phone} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>Email *</Form.Label>
                    <Form.Control defaultValue={selectedCustomer.email} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>DOB *</Form.Label>
                    <Form.Control type="date" defaultValue={selectedCustomer.dob} />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>City *</Form.Label>
                    <Form.Control defaultValue={selectedCustomer.address.split(",")[0]} />
                  </Form.Group>
                </div>
              </div>
            </Form>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancel</Button>
          <Button variant="warning" className="text-white">Update</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- SCHEMES MODAL ---------------------- */}
      <Modal show={showSchemes} onHide={() => setShowSchemes(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            Customer Schemes - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.schemes?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No schemes found for this customer.</p>
            </div>
          )}

          {selectedCustomer?.schemes?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>Scheme ID</th>
                    <th>Scheme Name</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Next Due Date</th>
                    <th>Total Amount</th>
                    <th>Paid Amount</th>
                    <th>Balance</th>
                    <th>Months Paid</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.schemes.map((scheme) => (
                    <tr key={scheme.id}>
                      <td>{scheme.id}</td>
                      <td className="fw-bold">{scheme.name}</td>
                      <td><span className="badge bg-info">{scheme.type}</span></td>
                      <td>{scheme.startDate}</td>
                      <td>{scheme.endDate}</td>
                      <td className="fw-bold text-warning">{scheme.nextDueDate}</td>
                      <td>{scheme.totalAmount}</td>
                      <td className="text-success">{scheme.paidAmount}</td>
                      <td className="text-danger">{scheme.balanceAmount}</td>
                      <td>{scheme.monthsPaid}/{scheme.totalMonths}</td>
                      <td><span className="badge bg-success">{scheme.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSchemes(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- ORDERS MODAL ---------------------- */}
      <Modal show={showOrders} onHide={() => setShowOrders(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            Order / Transaction History - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.orders?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No orders found for this customer.</p>
            </div>
          )}

          {selectedCustomer?.orders?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Wallet Used</th>
                    <th>Products</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td className="fw-bold">₹{order.amount}</td>
                      <td>{order.method}</td>
                      <td><span className="badge bg-info">{order.wallet}</span></td>
                      <td>
                        {order.products.map((product, idx) => (
                          <div key={idx} className="small">{product}</div>
                        ))}
                      </td>
                      <td>
                        <span className={`badge ${
                          order.status === 'Delivered' ? 'bg-success' : 
                          order.status === 'In Transit' ? 'bg-warning' : 'bg-info'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrders(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- LUCK DRAW TICKETS MODAL ---------------------- */}
      <Modal show={showLuckDraw} onHide={() => setShowLuckDraw(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            Luck Draw Tickets - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.luckDrawTickets?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No luck draw tickets purchased by this customer.</p>
            </div>
          )}

          {selectedCustomer?.luckDrawTickets?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>Ticket ID</th>
                    <th>Ticket Number</th>
                    <th>Draw Name</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Draw Date</th>
                    <th>Announced Date</th>
                    <th>Status</th>
                    <th>Result</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.luckDrawTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td className="fw-bold">{ticket.ticketNumber}</td>
                      <td>{ticket.drawName}</td>
                      <td>{ticket.purchaseDate}</td>
                      <td className="fw-bold">{ticket.amount}</td>
                      <td>{ticket.drawDate}</td>
                      <td>{ticket.announcedDate}</td>
                      <td>
                        <span className={`badge ${
                          ticket.status === 'Active' ? 'bg-success' : 'bg-secondary'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          ticket.result === 'Won' ? 'bg-success' : 
                          ticket.result === 'Lost' ? 'bg-danger' : 'bg-warning'
                        }`}>
                          {ticket.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLuckDraw(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- ECB TICKETS MODAL ---------------------- */}
      <Modal show={showEcbTickets} onHide={() => setShowEcbTickets(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            ECB Tickets - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.ecbTickets?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No ECB tickets purchased by this customer.</p>
            </div>
          )}

          {selectedCustomer?.ecbTickets?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>Ticket ID</th>
                    <th>Ticket Number</th>
                    <th>Event Name</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Event Date</th>
                    <th>Venue</th>
                    <th>Seat Number</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.ecbTickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td className="fw-bold">{ticket.ticketNumber}</td>
                      <td>{ticket.eventName}</td>
                      <td>{ticket.purchaseDate}</td>
                      <td className="fw-bold">{ticket.amount}</td>
                      <td>{ticket.eventDate}</td>
                      <td>{ticket.venue}</td>
                      <td>{ticket.seatNumber}</td>
                      <td>
                        <span className={`badge ${
                          ticket.status === 'Confirmed' ? 'bg-success' : 'bg-warning'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEcbTickets(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- PRODUCTS MODAL ---------------------- */}
      <Modal show={showProducts} onHide={() => setShowProducts(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            Products Purchased - {selectedCustomer?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCustomer?.products?.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No products purchased by this customer.</p>
            </div>
          )}

          {selectedCustomer?.products?.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-danger text-white">
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Delivery Date</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedCustomer.products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td className="fw-bold">{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.purchaseDate}</td>
                      <td className="fw-bold">{product.amount}</td>
                      <td>
                        <span className={`badge ${
                          product.status === 'Delivered' ? 'bg-success' : 
                          product.status === 'In Transit' ? 'bg-warning' : 'bg-info'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td>{product.deliveryDate || product.expectedDelivery || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProducts(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- WALLET HISTORY MODAL ---------------------- */}
      <Modal show={showWalletHistory} onHide={() => setShowWalletHistory(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            {activeWallet === "myWallet" && "My Wallet History"}
            {activeWallet === "cashbackWallet" && "Cashback Wallet History"}
            {activeWallet === "schemeWallet" && "Scheme Wallet History"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {activeWallet && selectedCustomer?.wallets?.[activeWallet]?.transactions.length === 0 && (
            <p className="text-center text-muted">No transactions in this wallet.</p>
          )}

          {activeWallet && selectedCustomer?.wallets?.[activeWallet]?.transactions.length > 0 && (
            <table className="table table-bordered">
              <thead className="bg-danger text-white">
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Balance After</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {selectedCustomer.wallets[activeWallet].transactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.date}</td>
                    <td className={t.type === "Credit" ? "text-success fw-bold" : "text-danger fw-bold"}>
                      {t.type}
                    </td>
                    <td>₹{t.amount}</td>
                    <td>₹{t.balanceAfter}</td>
                    <td>{t.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWalletHistory(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- CONFIRM STATUS MODAL ---------------------- */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            {confirmType === "activate" ? "Activate Customer" : "Deactivate Customer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to{" "}
            <strong>{confirmType === "activate" ? "activate" : "deactivate"}</strong>{" "}
            customer <strong>{selectedCustomer?.name}</strong>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button 
            variant={confirmType === "activate" ? "success" : "danger"} 
            onClick={handleStatusChange}
          >
            Yes, {confirmType === "activate" ? "Activate" : "Deactivate"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------- STYLE ---------------------- */}
      <style>{`
        .card-title, h5, strong { color: #b61d23 !important; }
        .card-body, .card-body p, .card-body div, .card-body span { color: #000 !important; }
        .badge.bg-success { background-color: #28a745 !important; }
        .badge.bg-danger { background-color: #dc3545 !important; }
        .custom-thead th { background-color: #b61d23 !important; color: white !important; }
        .table tbody tr:hover { background-color: #fff5f5 !important; transition: background-color 0.2s ease-in-out; }

        .btn-warning {
          background-color: #ffc107 !important;
          border: none !important;
        }
        .btn-warning:hover {
          background-color: #e0a800 !important;
        }

        .btn-danger {
          background-color: #dc3545 !important;
        }
        .btn-success {
          background-color: #28a745 !important;
        }
      `}</style>
    </div>
  );
};

export default Customers;