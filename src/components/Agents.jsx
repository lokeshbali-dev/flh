import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEye,
  FaListAlt,
  FaEdit,
  FaCheck,
  FaArrowLeft,
  FaUsers,
  FaStore,
  FaTimes,
  FaSearch,
  FaRupeeSign,
  FaCalendarAlt,
  FaBox,
  FaTicketAlt,
  FaShoppingCart,
  FaUserCheck,
} from "react-icons/fa";

export default function AgentPage() {
  const [view, setView] = useState("agents");
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmType, setConfirmType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [detailView, setDetailView] = useState(""); // For commission, schemes, etc.
  const [agentList, setAgentList] = useState([
    {
      id: "2",
      name: "VenkataMurthy Gattamaneni",
      phone: "9988776655",
      email: "venkat@gmail.com",
      status: "Approved",
      type: "Full Time",
      userCount: 4,
      vendorCount: 2,
      commission: "₹12,500",
      schemesJoined: 5,
      amcProducts: 3,
      mplProducts: 2,
      luckDrawTickets: 150,
      ecbTickets: 20,
      productsSold: 85,
      location: "Andhra Pradesh, India",
      joiningDate: "2023-01-15",
      subscriptionValidity: "2025-12-31",
      approvedDate: "2023-01-20",
    },
    {
      id: "3",
      name: "Sravani Devineni",
      phone: "9123456780",
      email: "sravani@gmail.com",
      status: "Pending",
      type: "Part Time",
      userCount: 3,
      vendorCount: 1,
      commission: "₹7,300",
      schemesJoined: 2,
      amcProducts: 1,
      mplProducts: 1,
      luckDrawTickets: 20,
      ecbTickets: 2,
      productsSold: 14,
      location: "Hyderabad, Telangana",
      joiningDate: "2024-05-10",
      subscriptionValidity: "2026-05-09",
      approvedDate: "-",
    },
  ]);

  const agents = agentList;

  const users = [
    {
      id: "U001",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      joinDate: "2024-08-15",
      dob: "1990-05-14",
      mobile: "7842188838",
      gender: "Male",
      address: "Hyderabad, India",
      referral: "REF1234",
      lastLogin: "2025-11-05 10:15 AM",
      mpl: "yes,2products",
      amc: "Yes",
      totalOrders: 5,
      schemesCount: 1,
      schemeStatus: "Active",
      productOrders: 12,
      cashback: "₹1,250",
    },
    {
      id: "U002",
      name: "Priya Sharma",
      email: "priya@example.com",
      joinDate: "2024-09-02",
      dob: "1993-07-21",
      mobile: "9988776651",
      gender: "Female",
      address: "Bengaluru, India",
      referral: "REF5678",
      lastLogin: "2025-10-31 08:40 AM",
      mpl: "no",
      amc: "No",
      totalOrders: 2,
      schemesCount: 0,
      schemeStatus: "Inactive",
      productOrders: 3,
      cashback: "₹120",
    },
  ];

  const vendors = [
    {
      id: "V001",
      name: "Vendor One Pvt Ltd",
      contact: "vendor1@example.com",
      phone: "9876543210",
      joined: "2023-10-01",
      orders: 24,
      location: "Mumbai, Maharashtra",
      status: "Active",
      category: "Electronics",
      rating: "4.5/5",
    },
    {
      id: "V002",
      name: "Vendor Two LLC",
      contact: "vendor2@example.com",
      phone: "9765432109",
      joined: "2024-03-12",
      orders: 9,
      location: "Delhi, India",
      status: "Active",
      category: "Home Appliances",
      rating: "4.2/5",
    },
    {
      id: "V003",
      name: "Vendor Three & Co",
      contact: "vendor3@example.com",
      phone: "9654321098",
      joined: "2024-07-20",
      orders: 15,
      location: "Chennai, Tamil Nadu",
      status: "Inactive",
      category: "Fashion",
      rating: "4.0/5",
    },
  ];

  // Commission Transactions Data
  const commissionTransactions = [
    {
      id: "C001",
      date: "2025-10-15",
      amount: "₹2,500",
      type: "Scheme Commission",
      description: "Monthly Savings Scheme Oct 2025",
      status: "Credited",
      reference: "SCH-OCT-2025"
    },
    {
      id: "C002",
      date: "2025-10-10",
      amount: "₹5,000",
      type: "Product Sales",
      description: "Electronics product sales commission",
      status: "Credited",
      reference: "PROD-OCT-001"
    },
    {
      id: "C003",
      date: "2025-10-05",
      amount: "₹3,000",
      type: "Ticket Sales",
      description: "Luck Draw Tickets commission",
      status: "Credited",
      reference: "TKT-OCT-2025"
    },
    {
      id: "C004",
      date: "2025-10-01",
      amount: "₹2,000",
      type: "AMC Commission",
      description: "Annual Maintenance Contract",
      status: "Credited",
      reference: "AMC-SEP-2025"
    }
  ];

  // Schemes Data
  const schemesData = [
    {
      id: "SCH001",
      name: "Monthly Savings Plan",
      type: "Monthly",
      startDate: "2024-01-15",
      endDate: "2025-01-15",
      nextDueDate: "2025-11-15",
      totalAmount: "₹50,000",
      paidAmount: "₹45,000",
      balanceAmount: "₹5,000",
      monthsPaid: 10,
      totalMonths: 12,
      status: "Active"
    },
    {
      id: "SCH002",
      name: "Weekly Investment",
      type: "Weekly",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      nextDueDate: "2025-11-08",
      totalAmount: "₹20,000",
      paidAmount: "₹18,000",
      balanceAmount: "₹2,000",
      monthsPaid: 8,
      totalMonths: 10,
      status: "Active"
    },
    {
      id: "SCH003",
      name: "Daily Savings",
      type: "Daily",
      startDate: "2024-06-01",
      endDate: "2024-11-30",
      nextDueDate: "2025-11-06",
      totalAmount: "₹10,000",
      paidAmount: "₹8,500",
      balanceAmount: "₹1,500",
      monthsPaid: 5,
      totalMonths: 6,
      status: "Active"
    }
  ];

  // AMC Products Data
  const amcProductsData = [
    {
      id: "AMC001",
      name: "Samsung AC Annual Maintenance",
      category: "Air Conditioner",
      customer: "Rajesh Kumar",
      startDate: "2024-01-15",
      endDate: "2025-01-15",
      amount: "₹2,500",
      status: "Active"
    },
    {
      id: "AMC002",
      name: "LG Refrigerator Service",
      category: "Refrigerator",
      customer: "Priya Sharma",
      startDate: "2024-03-01",
      endDate: "2025-03-01",
      amount: "₹1,800",
      status: "Active"
    },
    {
      id: "AMC003",
      name: "Whirlpool Washing Machine",
      category: "Washing Machine",
      customer: "Anil Patel",
      startDate: "2024-06-15",
      endDate: "2025-06-15",
      amount: "₹2,200",
      status: "Active"
    }
  ];

  // MPL Products Data
  const mplProductsData = [
    {
      id: "MPL001",
      name: "iPhone 15 Pro",
      category: "Mobile Phone",
      customer: "Rajesh Kumar",
      purchaseDate: "2024-08-20",
      amount: "₹89,999",
      status: "Delivered"
    },
    {
      id: "MPL002",
      name: "Samsung Galaxy S24",
      category: "Mobile Phone",
      customer: "Priya Sharma",
      purchaseDate: "2024-09-15",
      amount: "₹74,999",
      status: "Delivered"
    }
  ];

  // Luck Draw Tickets Data
  const luckDrawTicketsData = [
    {
      id: "LDT001",
      ticketNumber: "LD-2025-001",
      customer: "Rajesh Kumar",
      purchaseDate: "2025-10-15",
      amount: "₹100",
      drawDate: "2025-11-15",
      status: "Active"
    },
    {
      id: "LDT002",
      ticketNumber: "LD-2025-002",
      customer: "Priya Sharma",
      purchaseDate: "2025-10-14",
      amount: "₹100",
      drawDate: "2025-11-15",
      status: "Active"
    },
    {
      id: "LDT003",
      ticketNumber: "LD-2025-003",
      customer: "Anil Patel",
      purchaseDate: "2025-10-13",
      amount: "₹100",
      drawDate: "2025-11-15",
      status: "Active"
    }
  ];

  // ECB Tickets Data
  const ecbTicketsData = [
    {
      id: "ECB001",
      ticketNumber: "ECB-2025-001",
      customer: "Rajesh Kumar",
      purchaseDate: "2025-10-10",
      amount: "₹500",
      event: "Cricket Match - India vs Australia",
      eventDate: "2025-11-20",
      status: "Confirmed"
    },
    {
      id: "ECB002",
      ticketNumber: "ECB-2025-002",
      customer: "Priya Sharma",
      purchaseDate: "2025-10-09",
      amount: "₹500",
      event: "Cricket Match - India vs Australia",
      eventDate: "2025-11-20",
      status: "Confirmed"
    }
  ];

  // Products Sold Data
  const productsSoldData = [
    {
      id: "PS001",
      productName: "Samsung Galaxy S24",
      category: "Mobile Phone",
      customer: "Rajesh Kumar",
      saleDate: "2025-10-15",
      amount: "₹74,999",
      commission: "₹1,500",
      status: "Delivered"
    },
    {
      id: "PS002",
      productName: "LG Refrigerator",
      category: "Home Appliance",
      customer: "Priya Sharma",
      saleDate: "2025-10-14",
      amount: "₹45,999",
      commission: "₹920",
      status: "Delivered"
    },
    {
      id: "PS003",
      productName: "Sony Bravia TV",
      category: "Television",
      customer: "Anil Patel",
      saleDate: "2025-10-13",
      amount: "₹65,999",
      commission: "₹1,320",
      status: "Delivered"
    }
  ];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) {
      setSelectedAgent(null);
      setView("agents");
      return;
    }
    const q = searchTerm.trim().toLowerCase();
    const found = agents.find(
      (a) => a.id.toLowerCase() === q || a.name.toLowerCase().includes(q)
    );
    if (found) {
      setSelectedAgent(found);
      setView("profile");
    } else {
      setSelectedAgent(null);
      setView("agents");
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSelectedAgent(null);
    setView("agents");
  };

  const handleBackToList = () => {
    setSelectedAgent(null);
    setSelectedUser(null);
    setSelectedVendor(null);
    setView("agents");
    setSearchTerm("");
    setDetailView("");
  };

  const openUserList = () => {
    setView("userList");
  };

  const openVendorList = () => {
    setView("vendorList");
  };

  const openUserDetails = (user) => {
    setSelectedUser(user);
    setView("customerDetails");
  };

  const openVendorDetails = (vendor) => {
    setSelectedVendor(vendor);
    setView("vendorDetails");
  };

  // Open detail views for activity metrics
  const openDetailView = (type) => {
    setDetailView(type);
  };

  // Close detail view and return to profile
  const closeDetailView = () => {
    setDetailView("");
  };

  // ✅ Toggle Approve/Reject status
  const handleToggleStatus = (agentId) => {
    const updated = agentList.map((agent) =>
      agent.id === agentId
        ? {
            ...agent,
            status: agent.status === "Approved" ? "Rejected" : "Approved",
          }
        : agent
    );
    setAgentList(updated);
  };

  // Handle confirm status change
  const handleConfirmStatus = (agent, type) => {
    setSelectedAgent(agent);
    setConfirmType(type);
    setShowConfirm(true);
  };

  const handleStatusChange = () => {
    setAgentList((prev) =>
      prev.map((agent) =>
        agent.id === selectedAgent.id
          ? { 
              ...agent, 
              status: confirmType === "approve" ? "Approved" : "Rejected",
              approvedDate: confirmType === "approve" ? new Date().toISOString().split('T')[0] : "-"
            }
          : agent
      )
    );
    setShowConfirm(false);
  };

  return (
    <div className="container mt-4">
      {/* Title + Search Bar */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="mb-0 text-danger fw-bold">Agents</h3>
        <form
          className="d-flex align-items-center"
          onSubmit={handleSearch}
          style={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            height: "42px",
            width: "320px",
          }}
        >
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search agents..."
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
          >
            <FaSearch color="white" size={16} />
          </button>
        </form>
      </div>

      {/* DETAIL VIEWS FOR ACTIVITY METRICS */}
      
      {/* Commission Details View */}
      {detailView === "commission" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">Commission Transactions - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.date}</td>
                      <td className="fw-bold text-success">{transaction.amount}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.description}</td>
                      <td><span className="badge bg-success">{transaction.status}</span></td>
                      <td>{transaction.reference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-light rounded">
              <h6 className="fw-bold">Total Commission: {selectedAgent?.commission}</h6>
              <p className="mb-0 text-muted">All commissions are credited to your registered bank account every 15th of the month.</p>
            </div>
          </div>
        </div>
      )}

      {/* Schemes Details View */}
      {detailView === "schemes" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">Schemes Joined - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
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
                  {schemesData.map((scheme) => (
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
          </div>
        </div>
      )}

      {/* AMC Products Details View */}
      {detailView === "amc" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">AMC Products - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>AMC ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Customer</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {amcProductsData.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td className="fw-bold">{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.customer}</td>
                      <td>{product.startDate}</td>
                      <td>{product.endDate}</td>
                      <td className="fw-bold">{product.amount}</td>
                      <td><span className="badge bg-success">{product.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MPL Products Details View */}
      {detailView === "mpl" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">MPL Products - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>MPL ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Customer</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mplProductsData.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td className="fw-bold">{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.customer}</td>
                      <td>{product.purchaseDate}</td>
                      <td className="fw-bold">{product.amount}</td>
                      <td><span className="badge bg-success">{product.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Luck Draw Tickets Details View */}
      {detailView === "luckdraw" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">Luck Draw Tickets Sold - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>Ticket ID</th>
                    <th>Ticket Number</th>
                    <th>Customer</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Draw Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {luckDrawTicketsData.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td className="fw-bold">{ticket.ticketNumber}</td>
                      <td>{ticket.customer}</td>
                      <td>{ticket.purchaseDate}</td>
                      <td>{ticket.amount}</td>
                      <td>{ticket.drawDate}</td>
                      <td><span className="badge bg-success">{ticket.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-light rounded">
              <h6 className="fw-bold">Total Tickets Sold: {selectedAgent?.luckDrawTickets}</h6>
              <p className="mb-0 text-muted">Next draw date: 15th November 2025</p>
            </div>
          </div>
        </div>
      )}

      {/* ECB Tickets Details View */}
      {detailView === "ecb" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">ECB Tickets Sold - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>Ticket ID</th>
                    <th>Ticket Number</th>
                    <th>Customer</th>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Event</th>
                    <th>Event Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ecbTicketsData.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td className="fw-bold">{ticket.ticketNumber}</td>
                      <td>{ticket.customer}</td>
                      <td>{ticket.purchaseDate}</td>
                      <td>{ticket.amount}</td>
                      <td>{ticket.event}</td>
                      <td>{ticket.eventDate}</td>
                      <td><span className="badge bg-success">{ticket.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-light rounded">
              <h6 className="fw-bold">Total ECB Tickets Sold: {selectedAgent?.ecbTickets}</h6>
              <p className="mb-0 text-muted">Next event: India vs Australia on 20th November 2025</p>
            </div>
          </div>
        </div>
      )}

      {/* Products Sold Details View */}
      {detailView === "products" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">Products Sold - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="custom-thead">
                  <tr>
                    <th>Sale ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Customer</th>
                    <th>Sale Date</th>
                    <th>Amount</th>
                    <th>Commission</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productsSoldData.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td className="fw-bold">{product.productName}</td>
                      <td>{product.category}</td>
                      <td>{product.customer}</td>
                      <td>{product.saleDate}</td>
                      <td className="fw-bold">{product.amount}</td>
                      <td className="text-success fw-bold">{product.commission}</td>
                      <td><span className="badge bg-success">{product.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-light rounded">
              <h6 className="fw-bold">Total Products Sold: {selectedAgent?.productsSold}</h6>
              <p className="mb-0 text-muted">Total Commission from Products: ₹3,740</p>
            </div>
          </div>
        </div>
      )}

      {/* Status Details View */}
      {detailView === "status" && (
        <div className="card shadow-lg mb-4">
          <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#b61d23", color: "white" }}>
            <h5 className="mb-0">Agent Status Details - {selectedAgent?.name}</h5>
            <button className="btn btn-light btn-sm" onClick={closeDetailView}>
              <FaArrowLeft /> Back to Profile
            </button>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="card bg-light">
                  <div className="card-body">
                     <h6
    className="card-title fw-bold"
    style={{ color: "#000" }}
  >
   Current Status
  </h6>
                    <p className="card-text">
                      <span className={`badge ${selectedAgent?.status === "Approved" ? "bg-success" : "bg-danger"} fs-6`}>
                        {selectedAgent?.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-light">
                  <div
  className="card-body"
  style={{ color: "#000" }}
>
  <h6
    className="card-title fw-bold"
    style={{ color: "#000" }}
  >
    Approval Date
  </h6>

  <p
    className="card-text fs-5"
    style={{ color: "#000", margin: 0 }}
  >
    {selectedAgent?.approvedDate}
  </p>
</div>

                </div>
              </div>
            </div>
            <div className="mt-4">
                <h6
    className="card-title fw-bold"
    style={{ color: "#000" }}
  >
    Status History
  </h6>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Changed By</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedAgent?.approvedDate}</td>
                      <td><span className="badge bg-success">Approved</span></td>
                      <td>Admin User</td>
                      <td>Initial approval</td>
                    </tr>
                    <tr>
                      <td>{selectedAgent?.joiningDate}</td>
                      <td><span className="badge bg-info">Registered</span></td>
                      <td>System</td>
                      <td>Agent registration completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AGENT PROFILE */}
      {view === "profile" && selectedAgent && !detailView && (
        <div className="card shadow-lg mb-4" style={{ backgroundColor: "#fff" }}>
          <div className="card-header fw-bold" style={{ backgroundColor: "#b61d23", color: "white" }}>
            Agent Details
          </div>
          <div className="card-body">
            {/* Basic Info */}
            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Basic Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Agent ID:</strong>{" "}
                <span style={{ color: "#555" }}>{selectedAgent.id}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Name:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.name}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Phone:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.phone}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Email:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.email}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Location:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.location}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Agent Type:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.type}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Joining Date:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.joiningDate}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Subscription Validity:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedAgent.subscriptionValidity}</span>
              </div>
            </div>

            <hr />

            {/* Activity Info - Clickable Items */}
            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Activity Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Commission Credited:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("commission")}
                  className="text-primary"
                >
                  {selectedAgent.commission} <FaRupeeSign />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Schemes Joined:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("schemes")}
                  className="text-primary"
                >
                  {selectedAgent.schemesJoined} <FaCalendarAlt />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>AMC Products Added:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("amc")}
                  className="text-primary"
                >
                  {selectedAgent.amcProducts} <FaBox />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>MPL Products Added:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("mpl")}
                  className="text-primary"
                >
                  {selectedAgent.mplProducts} <FaBox />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Luck Draw Tickets Sold:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("luckdraw")}
                  className="text-primary"
                >
                  {selectedAgent.luckDrawTickets} <FaTicketAlt />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>ECB Tickets Sold:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("ecb")}
                  className="text-primary"
                >
                  {selectedAgent.ecbTickets} <FaTicketAlt />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Products Sold:</strong>{" "}
                <span 
                  style={{ color: "#000", cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("products")}
                  className="text-primary"
                >
                  {selectedAgent.productsSold} <FaShoppingCart />
                </span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Status:</strong>{" "}
                <span 
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => openDetailView("status")}
                  className="text-primary"
                >
                  <span className={`badge ${selectedAgent.status === "Approved" ? "bg-success" : "bg-danger"}`}>
                    {selectedAgent.status} <FaUserCheck />
                  </span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-2">
              <button className="btn btn-warning text-white" onClick={() => setShowEdit(true)}>
                <FaEdit /> Edit
              </button>
              <button className="btn btn-primary" onClick={openUserList}>
                <FaUsers /> View Users
              </button>
              <button className="btn btn-info text-white" onClick={openVendorList}>
                <FaStore /> View Vendors
              </button>
              <button className="btn btn-secondary" onClick={handleClearSearch}>
                <FaArrowLeft /> Back to List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the components (USERS LIST, VENDORS LIST, USER DETAILS, VENDOR DETAILS, AGENTS TABLE, MODALS) remain the same as in your original code */}

      {/* USERS LIST VIEW */}
      {view === "userList" && (
        <div className="card shadow-sm border-0 rounded-3 p-3">
          <div className="mb-3">
            <button className="btn btn-secondary" onClick={() => setView("profile")}>
              <FaArrowLeft /> Back to Agent
            </button>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped mb-0 align-middle custom-table">
              <thead className="custom-thead">
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.joinDate}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => openUserDetails(u)}>
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VENDORS LIST VIEW */}
      {view === "vendorList" && (
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body p-0">
            <table className="table table-striped mb-0 align-middle custom-table">
              <thead className="custom-thead">
                <tr>
                  <th>Vendor ID</th>
                  <th>Vendor Name</th>
                  <th>Contact Email</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((v) => (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.contact}</td>
                    <td>{v.joined}</td>
                    <td>
                      <span className={`badge ${v.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                        {v.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => openVendorDetails(v)}>
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* USER DETAILS CARD */}
      {view === "customerDetails" && selectedUser && (
        <div className="card shadow-lg p-4" style={{ backgroundColor: "#fff" }}>
          <Card.Title className="text-danger fw-bold mb-3" style={{ color: "#b61d23" }}>
            Customer Details
          </Card.Title>
          <div className="card-body">
            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Basic Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Name:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.name}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Mobile:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.mobile}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Email:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.email}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Gender:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.gender}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Date of Birth:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.dob}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Address:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.address}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Registration Date:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.joinDate}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Referral Code:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.referral}</span>
              </div>
            </div>

            <hr style={{ borderColor: "#b61d23" }} />

            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Activity Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Last Login Time:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.lastLogin}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Total Orders / Transactions:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.totalOrders}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>MPL:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.mpl}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>AMC:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.amc}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>No. of Schemes:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedUser.schemesCount}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Scheme Status:</strong>{" "}
                <span className="badge bg-success">{selectedUser.schemeStatus}</span>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-warning me-2 text-white">
                <FaEdit /> Edit
              </button>
              <button className="btn btn-danger me-2">
                <FaTimes /> Deactivate
              </button>
              <button className="btn btn-secondary" onClick={() => setView("userList")}>
                <FaArrowLeft /> Back to Users
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VENDOR DETAILS */}
      {view === "vendorDetails" && selectedVendor && (
        <div className="card shadow-lg mb-4" style={{ backgroundColor: "#fff" }}>
          <div className="card-header fw-bold" style={{ backgroundColor: "#b61d23", color: "white" }}>
            Vendor Details
          </div>
          <div className="card-body">
            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Basic Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Vendor ID:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.id}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Vendor Name:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.name}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Contact Email:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.contact}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Phone:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.phone}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Join Date:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.joined}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Location:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.location}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Category:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.category}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Rating:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.rating}</span>
              </div>
            </div>

            <hr />

            <h5 className="fw-bold mb-3" style={{ color: "#800000" }}>Activity Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Total Orders:</strong>{" "}
                <span style={{ color: "#000" }}>{selectedVendor.orders}</span>
              </div>
              <div className="col-md-6 mb-2">
                <strong style={{ color: "#333" }}>Status:</strong>{" "}
                <span className={`badge ${selectedVendor.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                  {selectedVendor.status}
                </span>
              </div>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-2">
              <button className="btn btn-warning text-white">
                <FaEdit /> Edit
              </button>
              <button className="btn btn-danger">
                <FaTimes /> Deactivate
              </button>
              <button className="btn btn-secondary" onClick={() => setView("vendorList")}>
                <FaArrowLeft /> Back to Vendors
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AGENTS TABLE */}
      {view === "agents" && (
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body p-0">
            <table className="table table-striped mb-0 align-middle custom-table">
              <thead className="custom-thead">
                <tr>
                  <th>Agent ID</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.phone}</td>
                    <td>{a.email}</td>
                    <td>{a.location}</td>
                    <td>
                      <span className={`badge ${a.status === "Approved" ? "bg-success" : "bg-danger"}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2 text-white" onClick={() => { setSelectedAgent(a); setShowEdit(true); }}>
                        <FaEdit />
                      </button>
                      {a.status === "Approved" ? (
                        <button className="btn btn-danger btn-sm" onClick={() => handleConfirmStatus(a, "reject")}>
                          <FaTimes />
                        </button>
                      ) : (
                        <button className="btn btn-success btn-sm" onClick={() => handleConfirmStatus(a, "approve")}>
                          <FaCheck />
                        </button>
                      )}
                      <button className="btn btn-primary btn-sm ms-2" onClick={() => { setSelectedAgent(a); setView("profile"); }}>
                        <FaEye />
                      </button>
                      <button className="btn btn-info btn-sm ms-2 text-white" onClick={() => { setSelectedAgent(a); setShowSubscriptions(true); }}>
                        <FaListAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBSCRIPTION MODAL */}
      {showSubscriptions && (
        <Modal title={`Subscriptions - ${selectedAgent?.name}`} onClose={() => setShowSubscriptions(false)}>
          <div className="text-center py-5">
            <h5 className="text-danger fw-bold mb-3">No Subscriptions Found</h5>
            <p className="text-muted">No subscription records found for this agent.</p>
            <button className="btn btn-danger mt-4" onClick={() => setShowSubscriptions(false)}>
              Close
            </button>
          </div>
        </Modal>
      )}

      {/* EDIT MODAL */}
      {showEdit && (
        <Modal title="Edit Agent" onClose={() => setShowEdit(false)}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name *</label>
              <input type="text" className="form-control" defaultValue={selectedAgent?.name?.split(" ")[0] || ""} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name *</label>
              <input type="text" className="form-control" defaultValue={selectedAgent?.name?.split(" ")[1] || ""} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number *</label>
              <input type="text" className="form-control" defaultValue={selectedAgent?.phone || ""} readOnly />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input type="email" className="form-control" defaultValue={selectedAgent?.email || ""} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Birth *</label>
              <input type="text" className="form-control" defaultValue="19-05-1997" />
            </div>
            <div className="col-md-6">
              <label className="form-label">State *</label>
              <input type="text" className="form-control" defaultValue="Andhra Pradesh" />
            </div>
            <div className="col-md-6">
              <label className="form-label">City *</label>
              <input type="text" className="form-control" defaultValue="Visakhapatnam" />
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button className="btn btn-secondary" onClick={() => setShowEdit(false)}>
              Cancel
            </button>
            <button className="btn btn-warning text-white" onClick={() => setShowEdit(false)}>
              Update
            </button>
          </div>
        </Modal>
      )}

      {/* CONFIRM STATUS MODAL */}
      {showConfirm && (
        <Modal title={`${confirmType === "approve" ? "Approve" : "Reject"} Agent`} onClose={() => setShowConfirm(false)}>
          <div className="text-center py-3">
            <p>
              Are you sure you want to{" "}
              <strong>{confirmType === "approve" ? "approve" : "reject"} {selectedAgent?.name}?</strong>
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className={`btn ${confirmType === "approve" ? "btn-success" : "btn-danger"}`} onClick={handleStatusChange}>
                Yes, {confirmType === "approve" ? "Approve" : "Reject"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .custom-thead {
          background-color: #b61d23 !important;
          color: white !important;
        }
        
        .custom-thead th {
          background-color: #b61d23 !important;
          color: white !important;
          border: none !important;
          padding: 12px 15px !important;
          font-weight: 600;
          font-size: 15px;
        }

        .table-striped tbody tr:nth-of-type(odd) {
          background-color: rgba(0, 0, 0, 0.02) !important;
        }

        .table-striped tbody tr:nth-of-type(even) {
          background-color: rgba(0, 0, 0, 0.05) !important;
        }

        .table tbody tr:hover {
          background-color: #e8f4f8 !important;
          transition: background-color 0.2s ease-in-out;
        }

        .table th,
        .table td {
          border: none !important;
          vertical-align: middle !important;
          padding: 12px 15px !important;
        }

        .table thead th {
          border: none !important;
          text-align: left;
        }

        .custom-table thead tr {
          background-color: #b61d23 !important;
        }
        
        .custom-table thead th {
          background-color: #b61d23 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}

/* ---------------- Modal component ---------------- */
function Modal({ title, children, onClose }) {
  return (
    <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger fw-bold">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Card.Title component ---------------- */
function Card({ children, className }) {
  return <div className={className}>{children}</div>;
}

Card.Title = function CardTitle({ children, className }) {
  return <h4 className={`card-title ${className}`}>{children}</h4>;
};