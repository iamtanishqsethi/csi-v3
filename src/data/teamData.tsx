
export interface Person {
  image_source: string;
  name: string;
  position: string;
}

 export const people1: Person[] = [
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "John Doe",
    position: "Software Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Jane Smith",
    position: "Product Manager",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Alice Johnson",
    position: "Data Scientist",
  },
];
export const people2: Person[] = [
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
]

export interface Department {
  name: string;
  people: string[];
}

export const executivesData: Department[] = [
  {
    name: "Technical Executives",
    people: ["Name 1", "Name 2", "Name 3"]
  },
  {
    name: "Public Relations Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Sponsorship Executives",
    people: ["Name 1", "Name 2", "Name 3"]
  },
  {
    name: "Technical Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Public Relations Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Sponsorship Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  }
];

export default executivesData;