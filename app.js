
const menubtn = document.querySelector("#menu-bar");
const sidebar = document.querySelector("#sidebar");
const closebtn = document.querySelector("#closebtn");

// open
menubtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
})

// close
closebtn.addEventListener("click", () => {
    closeSidebar()
})

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !e.target.closest("#menu-bar")) {
        closeSidebar()
    }
    console.log(e);
})

function closeSidebar() {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("translate-x-full");
}

const interactiveElements = document.querySelectorAll("a, button");
interactiveElements.forEach(el => el.addEventListener("click", closeSidebar));

//grid creation

function createCard(obj) {
    const div = document.createElement("div");
    div.classList.add(
        "p-5",
        "bg-white",
        "shadow-lg",
        "border",
        "border-stone-200",
        "rounded-xl",
        "flex",
        "flex-col",
        "gap-4",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-300"
    );
    div.id = "card";

    const imgdiv = document.createElement("div");
    imgdiv.classList.add(
        "w-10",
        "h-10",
        "bg-teal-100",
        "rounded-md",
        "flex",
        "items-center",
        "justify-center"
    );
    imgdiv.id = "imagediv";

    const image = document.createElement("img");
    image.src = obj.src;
    image.classList.add("w-6", "h-6", "object-contain");
    image.loading = "lazy";

    const span = document.createElement("span");
    span.classList.add(
        "text-xs",
        "px-2",
        "py-0.5",
        "bg-indigo-100",
        "text-indigo-700",
        "rounded-full", "w-max"
    );
    span.innerText = obj.text


    const h3 = document.createElement("h3");
    h3.classList.add("text-xl", "font-semibold", "text-gray-800");
    h3.innerText = obj.heading;

    const p = document.createElement("p");
    p.classList.add("text-sm", "text-gray-600", "leading-relaxed");
    p.innerText = obj.para;

    // assemble
    imgdiv.appendChild(image);
    div.appendChild(imgdiv);
    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(p);

    return div;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("../assets/skills.json")
        .then(res => res.json()) // Parses JSON from raw response
        .then(data => {
            data.forEach(skill => {
                const card = createCard(skill); // Creates a card from each skill
                document.getElementById("skill-content").appendChild(card); // Inserts it into the layout
            });
        })
        .catch(err => console.error("Failed to load skills:", err)); // Logs any errors
})

function createProjectCard(obj) {
    const div = document.createElement("div");
    div.className = "bg-white shadow-lg border rounded-xl p-5 flex flex-col gap-4 hover:shadow-xl transition duration-300";

    const img = document.createElement("img");
    img.src = obj.img;
    img.alt = `${obj.title} screenshot`;
    img.className = "rounded-md object-contain w-full h-full";

    const title = document.createElement("h3");
    title.className = "text-xl font-bold text-gray-800";
    title.innerText = obj.title;

    const stack = document.createElement("p");
    stack.className = "text-sm text-teal-600 italic";
    stack.innerText = obj.stack.join(" · ");

    const desc = document.createElement("p");
    desc.className = "text-sm text-gray-700";
    desc.innerText = obj.desc;

    const links = document.createElement("div");
    links.className = "flex gap-4";

    if (obj.live) {
        const liveBtn = document.createElement("a");
        liveBtn.href = obj.live;
        liveBtn.target = "_blank";
        liveBtn.innerText = "Live";
        liveBtn.className = "text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500";
        links.appendChild(liveBtn);
    }

    const repoBtn = document.createElement("a");
    repoBtn.href = obj.repo;
    repoBtn.target = "_blank";
    repoBtn.innerText = "Code";
    repoBtn.className = "text-sm px-3 py-1 bg-stone-100 border rounded hover:bg-stone-200";
    links.appendChild(repoBtn);

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(stack);
    div.appendChild(desc);
    div.appendChild(links);

    return div;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("../assets/projects.json").then(res => res.json()).then(data => {
        data.forEach((project) => {
            const work = createProjectCard(project);
            document.getElementById("projects").appendChild(work);
        })
    })
        .catch(err => console.error("some thing went wrong:", err))
})


//gsaap setup from here
document.addEventListener("DOMContentLoaded", () => {
    //   gsap.from("#leftcontainer h2",{
    //     opacity: 0,
    //     y: "100",
    //     duration: 2
    //   })
    //   gsap.from("#leftcontainer #namebox",{
    //     opacity: 0,
    //     y: 100,
    //     duration: 2
    //   })

    //   gsap.from("#leftcontainer #description",{
    //     opacity: 0,
    //     y: 100,
    //     duration: 2
    //   })

    const gtl = gsap.timeline();
    gtl.from("#leftcontainer h2", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    })
        .from("#leftcontainer #namebox", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"

        })
        .from("#leftcontainer #description", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"

        })

    gsap.from(".imgcontainer img", {
        opacity: 0,
        scale: 0.8,
        x:100,
        y: 100,
        duration: 1.5,
        ease: "power2.out"
    });
});
