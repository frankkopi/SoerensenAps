using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SoerensenApS.Startup))]
namespace SoerensenApS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
