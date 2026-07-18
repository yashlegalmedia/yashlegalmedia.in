document.addEventListener("DOMContentLoaded", function() {
    // Navigation / Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", function() {
            // Basic mobile menu toggle logic
            alert("Responsive Nav links menu activated. For desktop preview, full navigation layout is active.");
        });
    }

    // Studio Modal Toggle Activation
    const studioBtn = document.querySelector(".studio-btn");
    const studioExitBtn = document.getElementById("logout-btn");
    const studioSection = document.getElementById("studio");

    if (studioBtn && studioSection) {
        studioBtn.addEventListener("click", function(e) {
            e.preventDefault();
            studioSection.classList.remove("modal-hidden");
            document.body.style.overflow = "hidden"; // Disable background scrolling
        });
    }

    if (studioExitBtn && studioSection) {
        studioExitBtn.addEventListener("click", function() {
            studioSection.classList.add("modal-hidden");
            document.body.style.overflow = "auto";
        });
    }

    // Studio Auth Automation Simulation
    const authForm = document.getElementById("auth-form");
    const authBox = document.getElementById("studio-auth");
    const studioContent = document.getElementById("studio-content");
    const userDisplayName = document.getElementById("user-display-name");
    const toggleAuthMode = document.getElementById("toggle-auth-mode");
    const authTitle = document.getElementById("auth-title");
    const authSubmitBtn = document.getElementById("auth-submit-btn");

    let isLoginMode = true;

    if (toggleAuthMode) {
        toggleAuthMode.addEventListener("click", function() {
            isLoginMode = !isLoginMode;
            if (!isLoginMode) {
                authTitle.innerText = "Sign Up";
                authSubmitBtn.innerText = "Create Account & Setup Automation";
                toggleAuthMode.innerHTML = "Login instead";
            } else {
                authTitle.innerText = "Login";
                authSubmitBtn.innerText = "Sign In";
                toggleAuthMode.innerHTML = "Sign Up";
            }
        });
    }

    if (authForm) {
        authForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const emailValue = document.getElementById("auth-email").value;
            const nameExtract = emailValue.split("@")[0];
            
            // Capitalize first letter for premium display look
            const displayName = nameExtract.charAt(0).toUpperCase() + nameExtract.slice(1);
            
            // Run premium UI transition
            authSubmitBtn.innerText = "Initializing Automation Systems...";
            authSubmitBtn.disabled = true;

            setTimeout(() => {
                userDisplayName.innerText = displayName;
                authBox.classList.add("dashboard-hidden");
                studioContent.classList.remove("dashboard-hidden");
                
                // Trigger dynamic background processes simulation
                startLiveDashboardSimulation();
            }, 1200);
        });
    }

    // Studio Tabs Navigation Switching Logic
    const menuItems = document.querySelectorAll(".studio-menu li[data-tab]");
    const tabContents = document.querySelectorAll(".tab-content");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove active status from all buttons
            menuItems.forEach(i => i.classList.remove("active"));
            // Add to clicked button
            this.classList.add("active");

            // Hide all tab screens
            tabContents.forEach(tab => tab.classList.add("dashboard-hidden"));
            
            // Show destination tab screen
            const targetTab = this.getAttribute("data-tab");
            document.getElementById(`tab-${targetTab}`).classList.remove("dashboard-hidden");
        });
    });

    // Automation Engine Changes Alert Simulation
    const saveAutomationBtn = document.getElementById("save-automation-btn");
    const activeAutoCount = document.getElementById("active-auto-count");
    
    if (saveAutomationBtn) {
        saveAutomationBtn.addEventListener("click", function() {
            const copyScan = document.getElementById("auto-copyright-toggle").checked;
            const strikeTrigger = document.getElementById("auto-strike-toggle").checked;
            
            let count = 0;
            if (copyScan) count++;
            if (strikeTrigger) count++;

            activeAutoCount.innerText = count;
            alert("Security Guard Automation Matrix applied successfully!");
        });
    }

    // Periodic simulation of active digital legal protection scanner
    function startLiveDashboardSimulation() {
        setInterval(() => {
            console.log("YLM Digital Legal Scan Matrix checking for re-uploads...");
        }, 8000);
    }
});
