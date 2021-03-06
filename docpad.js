module.exports = {

  prompts: false,
  plugins: {
    less: {
      referencesOthers: true,
      lessOptions: {
        compress: true,
        sourceMap: {
          sourceMapFileInline: true
        }
      }
    }
  },
  reloadPaths: ['src'],
  regeneratePaths: ['src'],
  regenerateDelay: 300,


  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "INSITER",
      description: "Inside the Web - Teresina - PI",
      date: "10 de Junho de 2017",
      // If your event is free, just comment this line
      price: "$50",
      venue: "Auditório do Sebrae",
      address: "Av. Campos Sáles, 1046 - Centro (Norte), Teresina - PI, 64000-300",
      city: "Teresina",
      state: "Piauí"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Comprar ticket",
      link: "https://www.eventbrite.com.br/e/insiter-tickets-33716234164?aff=efbevent",
      advice: "Vagas limitadas!"
    },

    // Site info
    site: {
      theme: "default",
      url: "http://insiter.github.io/insiter.io/",
      googleanalytics: "UA-31931741-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      // 'schedule',
      // 'sponsors',
      'partners',
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Daniel Romero",
        photo: "https://avatars0.githubusercontent.com/u/444911?v=3&s=460",
        bio: "Desenvolvedor, escritor técnico, palestrante e atualmente trabalha com práticas DevOps.",
        company: "Linux Foundation",
        link: {
          href: "https://infoslack.pro/",
          text: "@infoslack"
        },
        presentation: {
          title: "Unikernels e o futuro da infraestrutura imutável",
          description: "Eles serão substituídos por hypervisors do tipo bare metal, otimizados de forma específica para o hardware e o deploy de nossas aplicações será feito através de um único arquivo binário. Nesta talk, veremos o que são Unikernels, os motivos de serem rápidos, seguros e que oportunidades ele reserva para o futuro.",
          time: "10h00"
        }
      },
      {
        name: "Fabio Akita",
        photo: "https://avatars2.githubusercontent.com/u/2840?v=3&s=460",
        bio: "Programador desde o começo dos anos 90, ativista de Ruby on Rails desde 2006, realizou quase 200 palestras pelo mundo e é co-fundador da Codeminer 42.",
        company: "Codeminer 42",
        link: {
          href: "http://www.akitaonrails.com/",
          text: "@akitaOnRails"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Jean Carlo",
        photo: "https://avatars3.githubusercontent.com/u/353504?v=3&s=460",
        bio: "Web craftsman and magician of computer machines. Developer at WORK.CO.",
        company: "WORK.CO",
        link: {
          href: "http://jcemer.com/",
          text: "@jcemer"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Gabriel Sobrinho",
        photo: "https://avatars2.githubusercontent.com/u/26460?v=3&s=460",
        bio: "Desenvolvedor com mais de 10 anos de experiência em aplicações web, ativista de Ruby on Rails desde 2008 e fundador da Hite.",
        company: "Hite",
        link: {
          href: "http://gabrielsobrinho.com/",
          text: "@sobrinho"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      },
      {
        name: "Dmitry Rocha",
        photo: "https://avatars1.githubusercontent.com/u/53300?v=3&s=460",
        bio: "I'm passionate to solve problems on the right and less complicated way, I will work to turn life more easy with technology using my favorite tools, and at last I'm looking for my next favorite one.",
        company: "Codeminer 42",
        link: {
          href: "https://github.com/dmitryrck",
          text: "@dmitryrck"
        },
        presentation: {
          title: "Unikernels e o futuro da infraestrutura imutável",
          description: "Eles serão substituídos por hypervisors do tipo bare metal, otimizados de forma específica para o hardware e o deploy de nossas aplicações será feito através de um único arquivo binário. Nesta talk, veremos o que são Unikernels, os motivos de serem rápidos, seguros e que oportunidades ele reserva para o futuro.",
          time: "10h00"
        }
      },
      {
        name: "Matias Leidemer",
        photo: "https://avatars1.githubusercontent.com/u/10559?v=3&s=460",
        bio: "Desenvolvedor com mais de 10 anos de experiência, apaixonado por Ruby, testes automatizados e código organizado. Trabalhou com diversas tecnologias, em empresas dentro e fora do Brasil. Atualmente é Web Development Engineer na Stickermule.",
        company: "Stickermule",
        link: {
          href: "http://www.leidemer.com/",
          text: "@matiasleidemer"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Thiago Alves",
        photo: "https://avatars0.githubusercontent.com/u/5190217?v=3&s=460",
        bio: "Atua a 10 anos no mercado web. Apaixonado por JavaScript, atualmente é Desenvolvedor Front-End na Codeminer 42. Entende que apresentar palestras é uma das formas mais divertidas de aprender.",
        company: "Codeminer 42",
        link: {
          href: "https://twitter.com/taltk9",
          text: "@taltk9"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Hite",
        logo: "assets/img/hite.png",
        url: "http://www.hite.com.br/"
      },
      {
        name: "Sticker Mule",
        logo: "assets/img/sticker-mule.png",
        url: "https://www.stickermule.com"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Assets path
    getAssets: function() {
      return "assets";
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
