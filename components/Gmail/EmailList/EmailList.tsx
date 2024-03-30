import React from "react";
import Header from "./Header/Header";
import SecondaryHeader from "./Header/SecondaryHeader";
import EmailRow from "./EmailRow";

type Props = {};

const EmailList = (props: Props) => {
  const fakeData = [
    {
      id: "1",
      title: "John Doe",
      subject: "Meeting Schedule Update",
      description:
        "Dear team, please note that the weekly meeting has been rescheduled to Friday at 10 AM instead of Thursday. Let me know if you can make it. Best, John",
      date: "2024-03-27",
    },
    {
      id: "2",
      title: "Acme Corp",
      subject: "Your Order Has Shipped!",
      description:
        "Good news! Your order #456123 has been successfully shipped. You can track your package with the tracking number 123456789. Thanks for shopping with us!",
      date: "2024-03-26",
    },
    {
      id: "3",
      title: "Jane Smith",
      subject: "Welcome to the Team!",
      description:
        "Hi there! We're thrilled to welcome you to our team. Your first day is on April 3rd, and we've prepared a special onboarding session for you. See you soon!",
      date: "2024-03-25",
    },
    {
      id: "4",
      title: "TechCon 2024",
      subject: "Early Bird Tickets Now Available!",
      description:
        "Don’t miss out on early bird tickets for TechCon 2024! Secure your spot now to enjoy a lineup of amazing speakers, cutting-edge workshops, and networking opportunities.",
      date: "2024-03-24",
    },
    {
      id: "5",
      title: "Local Library",
      subject: "Library Due Notice",
      description:
        "This is a friendly reminder that your borrowed books are due back at the library by the end of this week. Please return them on time to avoid late fees. Thank you!",
      date: "2024-03-23",
    },
  ];
  return (
    <section className="flex-grow h-full overflow-auto bg-white rounded-xl mt-2 min-w-0">
      <Header />
      <SecondaryHeader />
      {/* Email list items here */}
      <div>
        {fakeData.map((email) => (
          <EmailRow
            key={email.id}
            title={email.title}
            subject={email.subject}
            description={email.description}
            date={email.date}
            id={email.id}
          />
        ))}
      </div>
    </section>
  );
};

export default EmailList;
