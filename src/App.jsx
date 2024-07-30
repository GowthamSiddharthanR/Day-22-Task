import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import CardName from './CardName'
import PriceCard from './PriceCard'

function App() {
  const cards = [
    {
      plan: "Free",
      price: "0",
      features: [
        {
          name: "  Single User",
          enable: true
        },
        {
          name: "  50GB Storage",
          enable: true
        },
        {
          name: "  Unlimited Public Projects",
          enable: true
        },
        {
          name: "  Community Access",
          enable: true
        },
        {
          name: "  Unlimited Private Projects",
          enable: false
        },
        {
          name: "  Dedicated Phone Support",
          enable: false
        },
        {
          name: "  Free Subdomain",
          enable: false
        },
        {
          name: "  Monthly Status Report",
          enable: false
        }
      ]
    },
    {
      plan: "Plus",
      price: "9",
      features: [
        {
          name: "  5 Users",
          enable: true
        },
        {
          name: "  50GB Storage",
          enable: true
        },
        {
          name: "  Unlimited Public Projects",
          enable: true
        },
        {
          name: "  Community Access",
          enable: true
        },
        {
          name: "  Unlimited Private Projects",
          enable: true
        },
        {
          name: "  Dedicated Phone Support",
          enable: true
        },
        {
          name: "  Free Subdomain",
          enable: true
        },
        {
          name: "  Monthly Status Report",
          enable: false
        }
      ]
    },
    {
      plan: "Pro",
      price: "49",
      features: [
        {
          name: "  Unlimited Users",
          enable: true
        },
        {
          name: "  50GB Storage",
          enable: true
        },
        {
          name: "  Unlimited Public Projects",
          enable: true
        },
        {
          name: "  Community Access",
          enable: true
        },
        {
          name: "  Unlimited Private Projects",
          enable: true
        },
        {
          name: "  Dedicated Phone Support",
          enable: true
        },
        {
          name: "  Free Subdomain",
          enable: true
        },
        {
          name: "  Monthly Status Report",
          enable: true
        }
      ]
    }

  ]

  return (
    <div className="container" style={{ backgroundColor: "#02b2f7" }}>
      <CardName />

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 ">
          {/* <PriceCard plan="Free" price="0" />
          <PriceCard plan="Plus" price="9" />
          <PriceCard plan="Pro" price="49" /> */}
          {cards.map((card, index) => {
            return <PriceCard key={index} card={card} />
          })
          }
        </div>
      </main>
    </div>
  )
}

export default App
