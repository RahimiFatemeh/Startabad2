using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GroupController : BaseApiController
    {
        private readonly DataContext _context;
        public GroupController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        public async Task<ActionResult<GroupDto>> AddGroup (GroupDto groupDto)
        {
            var group = new Group { Title = groupDto.Title } ;

            _context.Groups.Add(group) ;

            await _context.SaveChangesAsync();

            return new GroupDto { Title = group.Title };
        }
    }
}