import React, { useEffect, useState } from "react";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import BookingList from "../../../components/customer/account/BookingList";
import ListChat from "../../../components/customer/account/ListChat";
import ChatWindow from "../../../components/customer/account/ChatWindow";
import OrderHistory from "../../../components/customer/account/OrderHistory";
import axios from "axios";

const SidebarItem = ({ active, icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
      ${active ? "bg-pink-50 text-pink-600" : "hover:bg-gray-50 text-gray-600"}`}
  >
    <span className="text-base">{icon}</span>
    <span>{label}</span>
  </button>
);

const UserProfile = () => {
  const [tab, setTab] = useState("booking"); // mặc định mở Booking
  const [editing, setEditing] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null); // ➜ state chọn cuộc trò chuyện

  const [form, setForm] = useState({
    name: "Nguyen Thanh Dat",
    email: "a@gmail.com",
    phone: "0123456789",
    address: "30 xa lộ hà nội, tp HCM",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // Fetch user profile data from API
      const response = await axios.get("http://localhost:8080/account/profile",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      const data = response.data;
      setForm(data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSave = async () => {
    setEditing(false);
    try {
      const response = await axios.put("http://localhost:8080/account/update", form);
      const data = response.data;
      setForm(data);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
      console.error("Failed to update profile:", error);
    }
  };

  const onCancel = () => setEditing(false);

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-10">
        {/* Banner */}
        <div className="mb-8">
          <img
            src="/src/assets/images/dog-sleep.jpg"
            alt="Shop Banner"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Welcome, <span className="text-pink-600">{form.name}</span>
        </h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <div className="rounded-2xl border border-gray-200 p-4 sticky top-4">
              <SidebarItem
                active={tab === "profile"}
                icon="👤"
                label="Profile"
                onClick={() => {
                  setTab("profile");
                  setSelectedChat(null);
                }}
              />
              <SidebarItem
                active={tab === "booking"}
                icon="📅"
                label="Booking"
                onClick={() => {
                  setTab("booking");
                  setSelectedChat(null);
                }}
              />
              <SidebarItem
                active={tab === "consult"}
                icon="💬"
                label="Consult"
                onClick={() => setTab("consult")}
              />
              <SidebarItem active={tab === "orders"} icon="🧾" label="Order History" onClick={() => setTab("orders")} /> {/* NEW */}
              <div className="mt-6 text-xs text-gray-400 px-2">Help</div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="col-span-12 md:col-span-9">
            {/* PROFILE */}
            {tab === "profile" && (
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <div className="h-14 bg-pink-400" />
                <div className="p-6">
                  {/* avatar + name */}
                  <div className="flex items-end gap-4 mb-6 -mt-2">
                    <img
                      src="https://i.pravatar.cc/100?img=5"
                      alt="avatar"
                      className="w-16 h-16 rounded-full border-4 border-white shadow"
                    />
                    <div className="pb-1">
                      <div className="font-semibold">{form.name}</div>
                      <div className="text-sm text-gray-500">{form.email}</div>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSave();
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div>
                      <label className="text-sm text-gray-500">Full Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Address</label>
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                      />
                    </div>

                    <div className="col-span-1 sm:col-span-2 flex items-center justify-center gap-3 mt-2">
                      {!editing ? (
                        <button
                          type="button"
                          onClick={() => setEditing(true)}
                          className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      ) : (
                        <>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* BOOKING */}
            {tab === "booking" && <BookingList />}

            {/* CONSULT: danh sách ↔ hộp thoại */}
            {tab === "consult" && (
              selectedChat ? (
                <ChatWindow
                  chat={selectedChat}
                  onBack={() => setSelectedChat(null)}
                />
              ) : (
                <ListChat onSelect={(chat) => setSelectedChat(chat)} />
              )
            )}
            {tab === "orders" && <OrderHistory />}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
