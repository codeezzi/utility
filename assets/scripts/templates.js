class Templates {
    constructor(categories = UTILITY_CATEGORIES, tools = UTILITY_TOOLS) {
        this.categories = categories;
        this.tools = tools;
    }

    // ------- TEMPLATES --------
    static navItemTemplate (categoryTitle, dropdownMenu){
        return (
            `<div class="btn-group d-none d-md-block py-2">
            <button
                    type="button"
                    class="btn btn-link text-light dropdown-toggle text-decoration-none"
                    data-toggle="dropdown">
                ${categoryTitle}
            </button>
            <div class="dropdown-menu">
                ${dropdownMenu}
            </div>
        </div>`
        )
    };

    static dropdownMenuTemplate (url, title) {
        return (`<a href="${url}" class="dropdown-item">${title}</a>`)
    }


    // ------- NODE GENERATOR --------
    generateDropdownList (category) {
        const tools = this.tools[category];
        if(!tools && !tools.length) {
            return [];
        }

        return tools.map(tool => Templates.dropdownMenuTemplate(category + tool.url, tool.title));
    }

    generateNavItems () {
        if(!this.categories) {
            return [];
        }

        return Object.keys(this.categories).map(category => {
            return Templates.navItemTemplate(category, this.generateDropdownList(category).join(''));
        })
    }


    // ------- APPEND TO DOM --------
    appendNavItems() {
        const navItems = this.generateNavItems();
        const navItemsString = navItems.join('');

        $('#uNavbar').children().first().after(navItemsString);
    }

}

